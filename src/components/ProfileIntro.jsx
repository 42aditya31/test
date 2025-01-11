// components/ProfileIntro.jsx
import React from "react";
import profileImage from "../assets/profile.png";

const ProfileIntro = () => {
  return (
    <div className="bg-[#073B4C] mt-16 mx-4 md:mx-16 rounded-xl shadow-lg w-[95%] md:w-[866px] h-auto py-8">
      <div className="flex flex-col md:flex-row items-center md:items-start rounded-xl h-full">
        {/* Left Content */}
        <div className="md:w-[70%] w-full px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Hi Aditya !!
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white">
            Welcome! Manage all your habits & daily schedule here.
          </p>
          <p className="mt-6 text-lg md:text-xl text-white">
            Your Score{" "}
            <span className="text-[#FFD166] text-3xl md:text-4xl font-extrabold">
              A+
            </span>
          </p>
        </div>
        {/* Right Content */}
        <div className="md:w-[30%] w-full flex justify-center items-center mt-6 md:mt-0">
          <img
            src={profileImage}
            alt="User Profile"
            className="h-32 w-32 md:h-36 md:w-36 object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileIntro;
