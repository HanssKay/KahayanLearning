// src/components/DashboardNavbar.jsx
import { useState, useRef, useEffect } from "react";
import { FiSun } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import bpom from "../assets/bpom.png"
import UserDrop from "./User";


const DashboardNavbar = () => {
    const [profileOpen, setProfileOpen] = useState(false);
    const toggleProfile = () => setProfileOpen(!profileOpen);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setProfileOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="bg-blue-300 fixed w-full lg:z-50 shadow-md px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <img src={bpom} alt="Logo" className="w-8 h-8" />
                <h1 className="text-xl font-bold text-black">Kahayan Learning</h1>
            </div>
            <div className="flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-gray-100">
                    <FiSun className="w-5 h-5 text-gray-400" />
                </button>
                <div className="me-4">
                    <UserDrop/>
                </div>
            </div>
        </header>
    );
};

export default DashboardNavbar;
