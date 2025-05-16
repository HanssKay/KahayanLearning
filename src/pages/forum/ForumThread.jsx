import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchReplies,
    createReply,
    updateReply,
    deleteReply,
    clearReplies,
} from "../../features/forum/forumSlice";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/DashboardSidebar";
import Navbar from "../../components/DashboardNavbar";

const ForumThread = () => {
    const dispatch = useDispatch();
    const { forumId } = useParams();

    const { replies, loading, error } = useSelector((state) => state.forum);

    const [replyText, setReplyText] = useState("");
    const [editingReplyId, setEditingReplyId] = useState(null);
    const [editedContent, setEditedContent] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    useEffect(() => {
        if (forumId) {
            dispatch(fetchReplies(forumId));
        }

        return () => dispatch(clearReplies());
    }, [dispatch, forumId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!replyText.trim()) return;

        await dispatch(
            createReply({
                forumId,
                userId: user.id,
                content: replyText,
                token,
            })
        );
        setReplyText("");
        setSuccessMessage("✅ Balasan berhasil dikirim!");
        setTimeout(() => setSuccessMessage(""), 3000);
    };

    const handleEdit = async (replyId) => {
        if (!editedContent.trim()) return;
        await dispatch(updateReply({ replyId, content: editedContent, token }));
        setEditingReplyId(null);
        setEditedContent("");
    };

    const handleDelete = async (replyId) => {
        await dispatch(deleteReply({ replyId, token }));
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 ml-64">
                <Navbar />
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">🧵 Diskusi Forum</h2>

                    {successMessage && (
                        <div className="mb-4 bg-green-100 text-green-800 px-4 py-2 rounded shadow">
                            {successMessage}
                        </div>
                    )}

                    {loading ? (
                        <p>Loading balasan...</p>
                    ) : error ? (
                        <p className="text-red-600">{error}</p>
                    ) : replies.length === 0 ? (
                        <p className="text-gray-500">Belum ada balasan.</p>
                    ) : (
                        <div className="space-y-4 mb-6">
                            {replies.map((reply) => (
                                <div
                                    key={reply.id}
                                    className="bg-white p-4 rounded-lg shadow-sm border"
                                >
                                    {editingReplyId === reply.id ? (
                                        <>
                                            <textarea
                                                value={editedContent}
                                                onChange={(e) => setEditedContent(e.target.value)}
                                                className="w-full p-2 border rounded"
                                            />
                                            <div className="mt-2 flex gap-2">
                                                <button
                                                    onClick={() => handleEdit(reply.id)}
                                                    className="bg-green-500 text-white px-3 py-1 rounded text-sm"
                                                >
                                                    Simpan
                                                </button>
                                                <button
                                                    onClick={() => setEditingReplyId(null)}
                                                    className="bg-gray-300 px-3 py-1 rounded text-sm"
                                                >
                                                    Batal
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-gray-800">{reply.content}</p>
                                            <p className="text-sm text-gray-500 mt-2">
                                                Oleh: {reply.user_name || `User ${reply.user_id}`} |{" "}
                                                {new Date(reply.created_at).toLocaleString("id-ID")}
                                            </p>
                                            {reply.user_id === user.id && (
                                                <div className="mt-2 flex gap-2">
                                                    <button
                                                        onClick={() => {
                                                            setEditingReplyId(reply.id);
                                                            setEditedContent(reply.content);
                                                        }}
                                                        className="text-blue-600 text-sm hover:underline"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(reply.id)}
                                                        className="text-red-600 text-sm hover:underline"
                                                    >
                                                        Hapus
                                                    </button>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <textarea
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded"
                            placeholder="Tulis balasan kamu di sini..."
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                        ></textarea>
                        <button
                            type="submit"
                            className="mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                        >
                            Kirim Balasan
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForumThread;
