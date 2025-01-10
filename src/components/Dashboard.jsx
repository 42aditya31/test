// Dashboard.jsx
import React from "react";
import ProfileIntro from "./ProfileIntro";
import Graph from "./Graph";
import Streaks from "./Streaks";
import Calendar from "./Calendar";
import Schedule from "./Schedule";

const Dashboard = () => {
  const user = {
    name: "Aditya Sharma",
    score: "A+",
    totalPoints: 1000,
    habits: 10,
    meditationMinutes: 300,
    longestStreak: 75,
    currentStreak: 90,
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Left Panel */}
      <div className="w-full md:w-2/3 p-6 space-y-6">
        <ProfileIntro name={user.name} score={user.score} />
        {/* <Graph totalPoints={user.totalPoints} /> */}
        <Streaks
          habits={user.habits}
          meditationMinutes={user.meditationMinutes}
          longestStreak={user.longestStreak}
          currentStreak={user.currentStreak}
        />
      </div>
      {/* Right Panel */}
      <div className="w-full md:w-1/3 p-6 bg-blue-900 text-white">
        <Calendar />
        <Schedule />
      </div>
    </div>
  );
};

export default Dashboard;
