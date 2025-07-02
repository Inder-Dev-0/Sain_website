import React from 'react';
import Navbar from './Navbar';
import bg from '../assets/gradient.png'

export default function HeroSection() {
  return (
    <div className={`md:min-h-screen z-3 relative w-full flex flex-col`}>
      {/* Navbar */}
      <img src={bg} className='absolute h-[80vh] sm:h-[150vh] object-cover -translate-x-1/2  left-1/2' alt="" />
      <Navbar/>

      {/* Hero Content */}
      <main className="flex flex-col items-center justify-center text-center px-4 py-20 relative">
        {/* Gradient background blob */}
       

        <h2 className="text-4xl md:mt-15 md:text-7xl font-bold text-gray-800 leading-tight max-w-3xl">
          Awesome UI Dark <br /> Template for <br /> <span className="text-gray-800">Webflow Agency</span>
        </h2>
        <button className="mt-10 bg-neutral-800 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-900 transition">
          Get in Touch
        </button>
      </main>
    </div>
  );
}
