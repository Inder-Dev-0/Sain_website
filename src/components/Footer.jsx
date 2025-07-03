import { FaInstagram, FaLinkedin, FaDribbble, FaGithub } from "react-icons/fa";
import gradient from "../assets/gradient2.png"
import logo from "../assets/logo.jpeg"

const Footer = () => {
    return (
        <footer className="relative z-10 w-full bg-gradient-to-b from-white/0 to-[#c5d5ff]/10 py-10 px-8">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md px-8 py-10 flex flex-col md:flex-row justify-between items-start gap-10">

                {/* Left Section */}
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="rounded-lg">
                            <img src={logo} className="w-9 h-9 rounded-lg pointer-events-none" alt="" />
                        </div>
                        <h1 className="text-xl font-semibold">SAiN dev</h1>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                        Ready to elevate your online presence?<br />
                        Contact us today to discuss your project and discover how we can bring your vision to life.
                    </p>
                    <p className="text-xs text-gray-400">
                        Made by saindev.com
                    </p>
                </div>

                {/* Middle Navigation */}
                <div className="flex-1 flex flex-col gap-2 text-sm text-gray-700">
                    <span className="font-medium">Navigation</span>
                    <a href="#" className="hover:text-black">Home</a>
                    <a href="#" className="hover:text-black">About</a>
                    <a href="#" className="hover:text-black">Contact Us</a>
                    <a href="#" className="hover:text-black">Services</a>
                </div>

                {/* Right Social Links */}
                <div className="flex-1 flex flex-col gap-2 text-sm">
                    <span className="font-medium text-gray-700">Follow us</span>
                    <div className="flex gap-4 text-gray-600 mt-2 text-lg">
                        <a href="#"><FaInstagram className="hover:text-black" /></a>
                        <a href="#"><FaLinkedin className="hover:text-black" /></a>
                        <a href="#"><FaDribbble className="hover:text-black" /></a>
                        <a href="#"><FaGithub className="hover:text-black" /></a>
                    </div>
                </div>
            </div>
            <img src={gradient} className='absolute -left-5 bottom-0 h-[80vh] sm:h-[150vh] object-cover -translate-x-1/2 -z-1 left-1/2 w-full pointer-events-none' alt="" />
        </footer>
    );
};

export default Footer;