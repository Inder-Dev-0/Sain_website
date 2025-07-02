import { FaInstagram, FaLinkedin, FaDribbble, FaGithub } from "react-icons/fa";
import gradient from "../assets/gradient2.png"

const Footer = () => {
    return (
        <footer className="relative z-10 w-full bg-gradient-to-b from-white/0 to-[#c5d5ff]/10 py-10 px-8">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md px-8 py-10 flex flex-col md:flex-row justify-between items-start gap-10">

                {/* Left Section */}
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="rounded-lg">
                            <span className="text-white text-xl font-bold"><svg width="45" height="45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.2552 0C4.59139 0 0 4.59139 0 10.2552V27.0363C0 32.7001 4.59139 37.2915 10.2552 37.2915H27.0363C32.7001 37.2915 37.2915 32.7001 37.2915 27.0363V10.2552C37.2915 4.59139 32.7001 0 27.0363 0H10.2552ZM24.9544 16.1291C25.0213 16.1674 25.0767 16.2223 25.1148 16.2884C25.153 16.3544 25.1726 16.4292 25.1717 16.5052C25.1708 16.5811 25.1493 16.6554 25.1096 16.7205L18.2533 28.7003C18.2007 28.7816 18.1219 28.8434 18.0294 28.8758C17.9369 28.9082 17.836 28.9093 17.7428 28.8789C17.6495 28.8485 17.5693 28.7884 17.5149 28.7082C17.4605 28.628 17.4351 28.5322 17.4425 28.4361L18.2042 21.2219H12.5572C12.4794 21.2219 12.403 21.2015 12.3358 21.1629C12.2687 21.1243 12.2133 21.0688 12.1753 21.0021C12.1373 20.9355 12.1182 20.8601 12.1198 20.7837C12.1214 20.7074 12.1438 20.6329 12.1845 20.5678L19.156 8.58683C19.2099 8.50559 19.2901 8.44449 19.3837 8.41339C19.4773 8.38229 19.5788 8.383 19.6719 8.41539C19.7651 8.44778 19.8444 8.50998 19.8971 8.59196C19.9498 8.67395 19.9729 8.77095 19.9626 8.86736L19.0015 16.0707H24.7341C24.8115 16.0707 24.8875 16.0909 24.9544 16.1291Z" fill="black" />
                            </svg>
                            </span>
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
            <img src={gradient} className='absolute -left-5 bottom-0 h-[80vh] sm:h-[150vh] object-cover -translate-x-1/2 -z-1 left-1/2 w-full' alt="" />
        </footer>
    );
};

export default Footer;