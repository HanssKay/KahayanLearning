import DashboardNavbar from "../../components/DashboardNavbar";
import DashboardSidebar from "../../components/DashboardSidebar";

const SertifikatPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <DashboardNavbar />
            <div className="flex flex-col md:flex-row">
                <DashboardSidebar />
                <main className="flex-1 p-4 md:p-6">
                    <h1 className="text-2xl lg:mt-15 md:mt-13 font-bold md:ms-0 ms-10 mb-4">Sertifikat Peserta</h1>
                    <div className="bg-white p-4 rounded-md shadow-md overflow-x-auto">
                        <table className="min-w-full md:table-auto w-full">
                            <thead>
                                <tr className="bg-gray-200 text-left">
                                    <th className="px-4 py-2">Course Pilihan</th>
                                    <th className="px-4 py-2">Jadwal Magang</th>
                                    <th className="px-4 py-2">Status Sertifikat</th>
                                    <th className="px-4 py-2">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="px-4 py-2">Kimia & Instrumentasi</td>
                                    <td className="px-4 py-2">1 Mar - 30 Mar</td>
                                    <td className="px-4 py-2 text-yellow-600 font-semibold">-</td>
                                    <td className="px-4 py-2">
                                        <button
                                            className="bg-gray-400 text-white px-3 py-1 rounded cursor-not-allowed"
                                            disabled
                                        >
                                            Unduh
                                        </button>
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-4 py-2">ISO 17025</td>
                                    <td className="px-4 py-2">5 Apr - 30 Apr</td>
                                    <td className="px-4 py-2 text-green-600 font-semibold">Tersedia</td>
                                    <td className="px-4 py-2">
                                        <a
                                            href="/files/sertifikat-iso17025.pdf"
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                                            download
                                        >
                                            Unduh
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SertifikatPage;
