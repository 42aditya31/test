// components/Streaks.jsx
import React from "react";

const Streaks = () => {
  const streaks = {
    habits: 10,
    meditationMinutes: 300,
    longestStreak: 75,
    currentStreak: "90%",
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow grid grid-cols-2 gap-4">
      <div>
        <p>Habits</p>
        <h2 className="text-xl font-bold">{streaks.habits}</h2>
      </div>
      <div>
        <p>Meditation Minutes</p>
        <h2 className="text-xl font-bold">{streaks.meditationMinutes}</h2>
      </div>
      <div>
        <p>Longest Streak</p>
        <h2 className="text-xl font-bold">{streaks.longestStreak} Days</h2>
      </div>
      <div>
        <p>Current Streak</p>
        <h2 className="text-xl font-bold">{streaks.currentStreak}</h2>
      </div>
    </div>
  );
};

export default Streaks;
