// src/components/DashboardSidebar.jsx
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

const DashboardSidebar = () => {
    const navigate = useNavigate();
    const sidebarRef = useRef(null); // 👉 Ref untuk mendeteksi klik luar sidebar
    const hamburgerRef = useRef(null); // 👉 Ref untuk tombol hamburger

    const coursesList = [
        "Kimia & Instrumentasi",
        "Biologi & Mikrobiologi",
        "ISO IEC 17025",
        "QMS ISO 9001",
        "ISO 14001",
        "Metode Analisa Nasional & Internasional",
        "Verifikasi & Validasi Metode Analisa",
        "Estimasi Ketidakpastian Dalam Pengukuran",
    ];

    const [selectedCourse, setSelectedCourse] = useState(coursesList[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state
    const [isOverlayActive, setIsOverlayActive] = useState(false); // Overlay state

    const handleSelect = (course) => {
        setSelectedCourse(course);
        setIsDropdownOpen(false);
        const slug = course.toLowerCase().replace(/\s+/g, "-");
        navigate(`/dashboard/${slug}`);
        setIsSidebarOpen(false); // Close sidebar on mobile after click
        setIsOverlayActive(false); // Disable overlay when sidebar is closed
    };

    const handleNavigate = (path) => {
        navigate(`/dashboard/${path}`);
        setIsSidebarOpen(false); // Close sidebar on mobile after navigating
        setIsOverlayActive(false); // Disable overlay when sidebar is closed
    };

    // Menutup sidebar ketika klik di luar sidebar, kecuali klik tombol hamburger
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Pastikan klik tidak terjadi pada sidebar atau hamburger button
            if (
                sidebarRef.current && !sidebarRef.current.contains(event.target) &&
                hamburgerRef.current && !hamburgerRef.current.contains(event.target)
            ) {
                setIsSidebarOpen(false); // Close sidebar if click outside
                setIsOverlayActive(false); // Disable overlay when sidebar is closed
            }
        };

        // Menambahkan event listener
        document.addEventListener("click", handleClickOutside);

        // Menghapus event listener saat komponen unmount
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            {/* Overlay (untuk menggelapkan halaman saat sidebar terbuka) */}
            {isOverlayActive && (
                <div
                    className="fixed inset-0 bg-gray-800 opacity-50 z-0"
                    onClick={() => {
                        setIsSidebarOpen(false);
                        setIsOverlayActive(false); // Disable overlay on click
                    }}
                />
            )}

            {/* Hamburger menu (mobile only) */}
            <div className="lg:hidden p-4">
                <button
                    ref={hamburgerRef} // 👉 Menggunakan ref untuk tombol hamburger
                    onClick={(e) => {
                        e.stopPropagation(); // Menghentikan event agar tidak ditangkap oleh event listener klik luar
                        setIsSidebarOpen(!isSidebarOpen);
                        setIsOverlayActive(!isSidebarOpen); // Toggle overlay state
                    }}
                    className="text-gray-800"
                >
                    {isSidebarOpen ? <X size={28} /> : <Menu size={35} className="mt-10 ms-[-5px] fixed" />}
                </button>
            </div>

            {/* Sidebar */}
            <aside
                ref={sidebarRef} // 👉 Ref untuk mendeteksi klik di luar sidebar
                className={`bg-slate-200 shadow-md rounded-md p-4 w-64
                ${isSidebarOpen ? "block" : "hidden"} 
                fixed top-0 left-0 min-h-screen lg:mt-13 lg:static lg:block`}
            >
                <h2 className="text-lg font-bold mb-4">Courses List</h2>

                {/* Dropdown course */}
                <div className="relative mb-4">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full bg-gray-100 hover:bg-gray-300  cursor-pointer p-2 rounded flex justify-between items-center"
                    >
                        {selectedCourse}
                        {isDropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>

                    {isDropdownOpen && (
                        <ul className="absolute z-10 bg-white border mt-1 rounded w-full shadow-md">
                            {coursesList
                                .filter((course) => course !== selectedCourse)
                                .map((course, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleSelect(course)}
                                        className="p-2 hover:bg-gray-200 cursor-pointer"
                                    >
                                        {course}
                                    </li>
                                ))}
                        </ul>
                    )}
                </div>

                {/* Menu tambahan */}
                <div className="space-y-2">
                    <button onClick={() => navigate("/dashboard")}
                        className="w-full text-left p-2 bg-gray-100 hover:bg-gray-300 cursor-pointer rounded">
                        Courses
                    </button>
                    <button
                        onClick={() => handleNavigate("kuesioner")}
                        className="w-full text-left p-2 bg-gray-100 hover:bg-gray-300 cursor-pointer rounded"
                    >
                        Kuesioner
                    </button>
                    <button
                        onClick={() => handleNavigate("laporan-data")}
                        className="w-full text-left p-2 bg-gray-100 hover:bg-gray-300 cursor-pointer rounded"
                    >
                        Laporan PKL
                    </button>
                    <button
                        onClick={() => handleNavigate("sertifikat")}
                        className="w-full text-left p-2 bg-gray-100 hover:bg-gray-300 cursor-pointer rounded"
                    >
                        Sertifikat PKL
                    </button>
                </div>
            </aside>
        </>
    );
};

export default DashboardSidebar;
