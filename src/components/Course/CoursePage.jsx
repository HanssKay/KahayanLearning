// src/pages/CoursePage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { courseConfig } from "../../data/courses";
import SectionAccordion from "../SectionAccordion";
import DashboardNavbar from "../DashboardNavbar";
import DashboardSidebar from "../DashboardSidebar";
import SecContent from "../SecContent";
import { useState } from "react";

const CoursePage = () => {
    const { courseSlug } = useParams();
    const { name: courseName, sections } = courseConfig[courseSlug] || {};
    const [openSection, setOpenSection] = useState(null);
    const navigate = useNavigate();

    if (!courseName) return <p className="p-6">Course tidak ditemukan.</p>;

    return (
        <div className="min-h-screen bg-gray-50">
            <DashboardNavbar />
            <div className="flex">
                <DashboardSidebar />
                <div className="flex-1 h-full mt-13 flex-col p-6">
                    <div className=" items-center mb-3">
                        <h1 className="text-3xl font-bold">{courseName}</h1>
                        <button onClick={() => navigate("/dashboard")} className="py-2 cursor-pointer mt-1 hover:text-blue-600 text-blue-300 font-bold text-lg">
                            Dashboard
                        </button>
                    </div>

                    {sections.map((id) => (
                        <SectionAccordion
                            key={id}
                            title={`Pertemuan ${id}`}
                            isOpen={openSection === id}
                            onToggle={() => setOpenSection((prev) => (prev === id ? null : id))}
                        >
                            <SecContent sectionId={id} />
                        </SectionAccordion>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursePage;