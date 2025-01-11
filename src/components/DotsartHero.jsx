import React from "react";

const DotsartHero = () => {
  return (
    <div className="relative bg-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-white shadow-md z-10">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-red-500 rounded-full"></div>
          <span className="text-xl font-bold text-black">Dotsart</span>
        </div>
        <nav className="flex space-x-6">
          {["ABOUT", "SERVICES", "WORKS", "TEAM", "CONTACT"].map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 font-medium hover:text-black transition"
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center">
        {/* Rotating Circular Design */}
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full shadow-xl"></div>
          <div className="relative w-[250px] h-[250px] flex items-center justify-center rounded-full border-[2px] border-gray-300 animate-spin-slow">
            <span className="absolute text-sm text-gray-500 uppercase tracking-wide text-center">
              Motion Design Prototyping Illustration Web Development Social
              Media Design App Design
            </span>
            {/* Inner Shapes */}
            <div className="absolute flex items-center justify-center space-x-2">
              <div className="w-14 h-14 bg-gray-500 rounded-l-full"></div>
              <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Large Text and Subtext */}
        <div className="relative mt-10 text-center">
          <h1 className="text-9xl font-black tracking-tight text-black uppercase">
            Dot<span className="text-gray-300">s</span>art
          </h1>
          <p className="text-sm font-light text-gray-600 mt-2">
            Dotsart Studio is a design agency that focuses on creating digital
            products
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-[2px] h-6 bg-black"></div>
        <p className="text-sm text-gray-600 mt-2 uppercase tracking-wide">
          Scroll to Explore
        </p>
      </div>
    </div>
  );
};

export default DotsartHero;
