import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect} from 'react';
import bpom from "../assets/bpom.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState (false);
    useEffect(() => {
        function handleClickOutside(event) {
          if (!event.target.closest(".bi-x-lg")) {
            setIsOpen(false);
          }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, []);
    
      // Tutup menu ketika pindah halaman
      useEffect(() => {
        setIsOpen(false);
      }, [location.pathname]);
    return (
        
        <header className="w-full bg-blue-300 text-black py-4 px-6 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50 rounded-b-lg">
            {/* Logo */}
            <button className="absolute z-20 text-white-800 top-3.5 right-4 text-3xl font-bold md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`}></i>
            </button>
            <div className="flex items-center gap-3">
                <img
                    src={bpom}
                    alt="Logo"
                    className="md:h-12 h-9  object-contain"
                />
                <h1 className="text-[13px] md:text-xl text-black md:ms-0 ms-[-3px] font-bold">
                    KAHAYAN INPRO
                </h1>
            </div>
            <nav>
                <ul className={`absolute md:gap-4 md:py-0 py-3 items-center rounded-md md:top-0 md:right-[30px] right-[50px] md:w-full w-[100px] text-center top-[70px] md:relative md:flex md:bg-transparent bg-blue-300 transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
                    <li>
                        <Link to="/" className="text-black font-bold hover:text-blue-800 transition duration-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-black font-bold hover:text-blue-800 transition duration-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-black font-bold hover:text-blue-800 transition duration-300">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="bg-green-600 font-bold md:flex hidden text-black px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                            Login
                        </Link>
                    </li>
                </ul>
                <ul className="flex me-8">
                    <li className='md:hidden font-bold rounded-lg p-2 text-black bg-green-600 hover:bg-green-700 text-xs'>
                        <Link to="/login">Login</Link>
                    </li>
                    {/* <li className='md:hidden font-bold  top-4 hover:bg-green-500 text-xs'>
                        <Link to="/sign" >Sign Up</Link>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
