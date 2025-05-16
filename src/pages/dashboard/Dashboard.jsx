import CourseCard from "../../components/Course/CourseCard";
import DashboardNavbar from "../../components/DashboardNavbar"; // Pastikan path import benar
import DashboardSidebar from "../../components/DashboardSidebar"; // Pastikan path import benar

const Dashboard = () => {
    const courseList = [
        "Kimia Instrumentasi",
        "Biologi Mikrobiologi",
        "ISO IEC 17025",
        "QMS ISO 9001",
        "ISO 14001",
        "Metode Analisa Nasional Internasional",
        "Verifikasi Validasi Metode Analisa",
        "Estimasi Ketidakpastian Dalam Pengukuran",
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <DashboardNavbar />

            {/* Layout dengan Sidebar dan Konten Utama */}
            <div className="flex">
                {/* Sidebar */}
                <DashboardSidebar />

                {/* Konten Utama */}
                <div className="flex-1 p-18">
                    {/*<h1 className="text-3xl font-bold mb-4">Daftar Kelas</h1>*/}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courseList.map((name, i) => (
                            <CourseCard key={i} courseName={name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;