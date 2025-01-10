// components/Schedule.jsx
import React from "react";

const Schedule = () => {
  const schedule = [
    { time: "5:00 AM - 5:30 AM", activity: "Meditation" },
    { time: "6:00 AM - 6:30 AM", activity: "Exercise" },
  ];

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold mb-2">Schedule</h2>
      {schedule.map((item, index) => (
        <div key={index} className="bg-blue-800 p-2 rounded-lg mb-2">
          <p>{item.time}</p>
          <h4>{item.activity}</h4>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
