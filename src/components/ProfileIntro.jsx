// components/ProfileIntro.jsx
import React from "react";

const ProfileIntro = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-xl font-bold">Hi Aditya!</h1>
      <p className="text-gray-500">Welcome! Manage your habits and schedule here.</p>
      <div className="mt-4">
        <p>Your Score: <span className="text-green-600 text-xl font-bold">A+</span></p>
      </div>
    </div>
  );
};

export default ProfileIntro;
