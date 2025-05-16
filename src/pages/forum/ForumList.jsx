// src/pages/ForumList.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchForums } from "../../features/forum/forumSlice";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/DashboardNavbar";

const ForumList = () => {
    const dispatch = useDispatch();
    const { courseSlug, sectionId } = useParams();

    // Ambil state dari redux
    const { forums, loading, error } = useSelector((state) => state.forum);

    useEffect(() => {
        if (courseSlug && sectionId) {
            dispatch(fetchForums({ courseSlug, sectionId }));
        }
    }, [dispatch, courseSlug, sectionId]);

    return (
        <div className="flex-1">
            <Navbar />
            <div className="p-6">
                <h2 className="mt-12 text-2xl font-bold mb-4">
                    🗨️ Forum Diskusi – Section {sectionId}
                </h2>

                {loading && <p>Memuat forum…</p>}
                {error && <p className="text-red-600">Error: {error}</p>}

                {!loading && forums.length === 0 ? (
                    <p className="text-gray-500">Belum ada topik forum.</p>
                ) : (
                    <ul className="space-y-4">
                        {forums.map((f) => (
                            <li
                                key={f.id}
                                className="bg-white p-4 rounded shadow hover:shadow-md transition"
                            >
                                <Link
                                    to={`/dashboard/${courseSlug}/section/${sectionId}/forum/${f.id}`}
                                    className="text-lg font-semibold text-blue-600 hover:underline"
                                >
                                    {f.judul_topik}
                                </Link>
                                <p className="text-gray-700 mt-1">{f.isi_topik}</p>
                                <p className="text-sm text-gray-500 mt-2">
                                    Dibuat oleh: {f.dibuat_oleh} |{" "}
                                    {new Date(f.created_at).toLocaleString("id-ID")}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ForumList;
