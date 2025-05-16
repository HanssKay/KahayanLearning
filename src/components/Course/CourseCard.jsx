// src/components/CourseCard.jsx
import { useNavigate } from "react-router-dom";
import { BookOpenIcon } from "@heroicons/react/24/outline";

const CourseCard = ({ courseName }) => {
    const navigate = useNavigate();
    const slug = courseName.toLowerCase().replace(/\s+/g, "-");

    return (
        <div
            onClick={() => navigate(`/dashboard/${slug}`)}
            className="p-5 bg-white rounded-2xl shadow hover:shadow-xl cursor-pointer transition duration-300 border border-gray-100 hover:border-blue-400 group"
        >
            <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                    <BookOpenIcon className="h-6 w-6" />
                </div>
                <h3 className="ml-3 text-xl font-bold group-hover:text-blue-600 transition">
                    {courseName}
                </h3>
            </div>
            <p className="text-gray-600 text-sm">
                Klik untuk masuk ke kelas {courseName} dan mulai belajar sesuai pertemuan yang tersedia.
            </p>
        </div>
    );
};

export default CourseCard;
