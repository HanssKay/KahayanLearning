// src/pages/LaporanPage.jsx
import DashboardNavbar from "../../components/DashboardNavbar";
import DashboardSidebar from "../../components/DashboardSidebar";
import { laporanDataConfig } from "../../data/laporan";
import { useState } from "react";

const LaporanPage = () => {
    const [selectedWeek, setSelectedWeek] = useState(null); // To manage dropdown state
    const [uploadedFiles, setUploadedFiles] = useState({}); // To track uploaded files per week

    // Handle file upload
    const handleFileUpload = (week, event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFiles((prev) => ({
                ...prev,
                [week]: file,
            }));
        }
    };

    // Handle file removal
    const handleFileRemove = (week) => {
        setUploadedFiles((prev) => {
            const updatedFiles = { ...prev };
            delete updatedFiles[week]; // Remove file for the specific week
            return updatedFiles;
        });
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <DashboardNavbar />
            <div className="flex">
                <DashboardSidebar />
                <main className="flex-1 p-6">
                    <h1 className="text-2xl font-bold mb-4 md:mt-15 mt-12">{laporanDataConfig.title}</h1>

                    <div className="space-y-4">
                        {laporanDataConfig.weeks.map((week, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-shadow duration-300"
                            >
                                <h2 className="text-lg font-semibold">{week}</h2>

                                <div className="mt-2">
                                    {/* Button to toggle file upload */}
                                    <button
                                        onClick={() => setSelectedWeek(selectedWeek === week ? null : week)}
                                        className="py-1 px-2 bg-blue-400 cursor-pointer text-white rounded hover:bg-blue-600"
                                    >
                                        {selectedWeek === week ? "Tutup Upload" : "Upload Laporan"}
                                    </button>

                                    {selectedWeek === week && (
                                        <div className="mt-4">
                                            <input
                                                type="file"
                                                onChange={(e) => handleFileUpload(week, e)}
                                                className="border p-2 rounded w-full"
                                            />
                                            {uploadedFiles[week] && (
                                                <div className="mt-2 flex items-center">
                                                    <p className="text-green-500 mr-4">
                                                        File {uploadedFiles[week].name} berhasil diupload!
                                                    </p>
                                                    <button
                                                        onClick={() => handleFileRemove(week)}
                                                        className="py-1 px-2 bg-red-400 cursor-pointer text-white rounded hover:bg-red-600"
                                                    >
                                                        Hapus
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LaporanPage;
