import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";

const UserDrop = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); 

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
  
    return (
      <div className="relative inline-block"  ref={dropdownRef}>
        {/* Icon User */}
        <button
          className="md:text-3xl text-2xl cursor-pointer mt-1 text-gray-700 hover:text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaUser className="text-[22px]"/>
        </button>
  
        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-30 bg-white border rounded-lg shadow-2xl" >
            <ul className="py-2 text-center">
              <li>
                <Link to="/dashboard/profile"className="flex items-center gap-2 px-2 py-2 text-black font-semibold hover:text-blue-600  hover:rounded-sm cursor-pointer">
                  <FaUser className="" />
                  Profile
                </Link>
              </li>
              <li>
                <Link to='/' className="flex items-center gap-2 px-3 py-1 text-black hover:text-red-600 font-semibold cursor-pointer">
                <CiLogout className="" />
                Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default UserDrop;
