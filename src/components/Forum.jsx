import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchForums } from "../features/forum/forumSlice";

const Forum = ({ courseSlug, sectionId }) => {
    const dispatch = useDispatch();
    const { forums, loading, error } = useSelector((state) => state.forum);

    useEffect(() => {
        if (courseSlug && sectionId) {
            dispatch(fetchForums({ courseSlug, sectionId }));
        }
    }, [courseSlug, sectionId, dispatch]);

    if (loading) return <div>Loading Forum...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Forum Diskusi</h2>

            {forums.length === 0 ? (
                <div>Tidak ada forum untuk section ini.</div>
            ) : (
                forums.map((forum) => (
                    <div key={forum.id} className="border p-4 mb-4 rounded shadow">
                        <h3 className="text-xl font-semibold">{forum.judul_topik}</h3>
                        <p className="text-gray-600">{forum.isi_topik}</p>
                        <p className="text-sm text-gray-400 mt-2">Oleh: {forum.dibuat_oleh}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Forum;
