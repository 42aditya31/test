import React from "react";
import backgroundImage from "../assets/Background.png";
import picture from "https://via.placeholder.com/800";


const HeroSection2 = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#073B4C] via-transparent to-[#118AB2] opacity-80"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
        <h1 className="text-white text-6xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
          When <span className="text-[#FFD166]">Culture</span> <br />
          Meets <span className="text-[#06D6A0]">Intelligence</span>
        </h1>
        <p className="text-[#073B4C] text-lg md:text-xl font-medium mt-6 drop-shadow-sm max-w-3xl">
          Discover a journey where ancient wisdom meets cutting-edge AI. 
          Transform your habits with solutions rooted in tradition and 
          powered by innovation.
        </p>
        <div className="flex space-x-6 mt-10">
          <button className="px-8 py-3 bg-[#FFD166] text-[#073B4C] font-bold rounded-lg shadow-lg hover:bg-[#F4A261] transition duration-300">
            Get Started
          </button>
          <button className="px-8 py-3 bg-[#06D6A0] text-white font-bold rounded-lg shadow-lg hover:bg-[#05B585] transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Foreground Image */}
      <img
        src={picture}
        alt="Foreground Illustration"
        className="absolute inset-0 h-screen w-auto mx-auto rounded-3xl"
      />
    </div>
  );
};

export default HeroSection2;
