import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Install react-icons if not yet
import logo from "../assets/logo.jpeg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-6 py-8 ">
      {/* Logo - Left */}
      <div className="flex items-center gap-2">
        <div className="rounded-lg">
          <img src={logo} className="w-9 h-9 rounded-lg pointer-events-none" alt="" />
        </div>
        <h1 className="text-xl font-semibold">SAiN dev</h1>
      </div>

      {/* Desktop Nav - Center */}
      <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-6 items-center bg-white/20 border-1 border-white backdrop-blur-md px-10 py-5 rounded-2xl shadow-sm">
        <a href="#" className="text-black font-semibold">Home</a>
        <a href="#" className="text-gray-500 hover:text-black">About</a>
        <a href="#" className="text-gray-500 text-nowrap hover:text-black">Contact Us</a>
        <a href="#" className="text-gray-500 hover:text-black">Services</a>
      </nav>

      {/* Mobile Menu Icon - Right (visible only on mobile) */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <HiX className="text-3xl text-black" />
          ) : (
            <HiMenu className="text-3xl text-black" />
          )}
        </button>
      </div>

      {/* Mobile Nav - full screen overlay */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 text-xl font-medium md:hidden z-40">
          <a href="#" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" onClick={() => setIsOpen(false)}>About</a>
          <a href="#" onClick={() => setIsOpen(false)}>How it Works</a>
          <a href="#" onClick={() => setIsOpen(false)}>Services</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
