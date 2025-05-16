import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMateri } from "../features/materi/materiSlice";
import { useParams, useNavigate } from "react-router-dom";
import AssignmentUpload from "./AssignmentUpload";

const SecContent = ({ sectionId }) => {
  const { courseSlug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    materials = [],
    loading,
    error,
  } = useSelector((state) => state.materi);

  useEffect(() => {
    dispatch(fetchMateri({ courseSlug, sectionId }));
  }, [dispatch, courseSlug, sectionId]);

  const sectionContent = [
    {
      title: "Pre-Test",
      type: "test",
      status: "Belum dikerjakan",
      action: (
        <div className="flex justify-end border-t-[1px] border-black mt-2">
          <button
            // onClick={() =>
            //   navigate(`/dashboard/${courseSlug}/section/${sectionId}/forum`)
            // }
            className="bg-blue-500 mt-4 hover:bg-blue-800 cursor-pointer text-white px-3 py-1 rounded"
          >
            Mulai
          </button>
        </div>
      ),
    },
    {
      title: "Video Pembelajaran",
      type: "video",
      status: "No content",
      action:(
        <div className="flex justify-start border-t-[1px] border-black mt-2">
          <h1 className="text-gray-500 mt-1">content belum tersedia</h1>
        </div>
      ),
    },
    {
      title: "Materi (PPT/PDF)",
      type: "material",
      status: error
        ? "Gagal dimuat"
        : Array.isArray(materials) && materials.length > 0
        ? "Tersedia"
        : "Tidak tersedia",
      action: error ? (
        <div className="text-red-500 border-t-[1px] border-t-black mt-1 py-1">Gagal memuat materi.</div>
      ) : Array.isArray(materials) && materials.length > 0 ? (
        <div className="space-y-4">
          {materials.map((material, i) => (
            <div
              key={i}
              className="flex items-start p-3 border rounded-lg bg-gray-50 hover:bg-gray-100 transition"
            >
              <div className="flex-shrink-0">
                <svg
                  className="w-6 h-6 text-red-500 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414a2 2 0 00-.586-1.414l-3.414-3.414A2 2 0 0011.586 2H6z" />
                </svg>
              </div>
              <div className="ml-3 flex-1">
                <h4 className="text-md font-semibold text-gray-800">
                  {material.judul}
                </h4>
                <p className="text-sm text-gray-600 mb-1">
                  {material.deskripsi}
                </p>
                <a
                  href={`http://localhost:5000/api/materi/download/${material.file_url
                    .split("/")
                    .pop()}`}
                  className="inline-block mt-1 px-3 py-1 text-sm text-white cursor-pointer bg-blue-600 rounded hover:bg-blue-700 transition"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <span className="text-gray-500">Tidak tersedia</span>
      ),
    },
    {
      title: "Forum Diskusi",
      type: "forum",
      status: "Aktif",
      action: (
        <div className="flex justify-end border-t-[1px] border-black mt-2">
          <button
            onClick={() =>
              navigate(`/dashboard/${courseSlug}/section/${sectionId}/forum`)
            }
            className="bg-blue-500 mt-4 hover:bg-blue-800 cursor-pointer text-white px-3 py-1 rounded"
          >
            Buka Forum
          </button>
        </div>
      ),
    },
    {
      title: "Penugasan",
      type: "assignment",
      status: "Belum dikumpulkan",
      action: (
        <AssignmentUpload sectionId={sectionId} courseSlug={courseSlug} />
      ),
    },
    {
      title: "Post-Test",
      type: "test",
      status: "Terkunci",
      action: (
        <div className="flex justify-between border-t-[1px] border-black mt-2">
          <h1 className="text-gray-500 mt-1">buka setelah menyelesaikan semua materi</h1>
          <button
            // onClick={() =>
            //   navigate(`/dashboard/${courseSlug}/section/${sectionId}/forum`)
            // }
            className="bg-blue-500 mt-9 hover:bg-blue-800 cursor-pointer text-white px-3 py-1 rounded"
          >
            Mulai
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Pertemuan {sectionId}</h1>

      {loading && (
        <div className="p-0 text-sm text-gray-500 bg-gray-100 rounded">
          Memuat materi...
        </div>
      )}

      {sectionContent.map((item, index) => (
        <div key={index} className="border rounded-lg p-4 shadow-sm">
          <div className=" items-center">
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">Status: {item.status}</p>
            </div>
            <div>{item.action}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SecContent;
