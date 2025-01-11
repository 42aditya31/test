import React, { useState } from "react";
import Schedule from "./Schedule";

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [form, setForm] = useState({
    title: "",
    time: "",
    days: "",
  });
  const [isAdding, setIsAdding] = useState(false);

  // Handle input change in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Add a new habit
  const addHabit = () => {
    if (!form.title || !form.time || !form.days) {
      alert("Please fill in all fields");
      return;
    }
    setHabits([
      ...habits,
      {
        id: Date.now(),
        title: form.title,
        time: form.time,
        days: parseInt(form.days),
        completed: false,
        streak: 0,
      },
    ]);
    setForm({ title: "", time: "", days: "" });
    setIsAdding(false); // Close the form
  };

  // Mark habit as completed
  const toggleComplete = (id) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completed: !habit.completed,
              streak: habit.completed ? habit.streak - 1 : habit.streak + 1,
            }
          : habit
      )
    );
  };

  // Edit a habit
  const editHabit = (id, newTitle) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, title: newTitle } : habit
      )
    );
  };

  // Delete a habit
  const deleteHabit = (id) => {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-xl font-bold mb-4">Habit Tracker</h1>

      {/* Add Habit Button */}
      {!isAdding && (
        <button
          onClick={() => setIsAdding(true)}
          className="bg-[#06D6A0] text-white px-4 py-2 rounded-md hover:bg-[#05C38A] transition"
        >
          Add New Habit
        </button>
      )}

      {/* Form for Adding Habit */}
      {isAdding && (
        <div className="bg-gray-100 p-4 rounded-lg mt-4 space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Habit Title"
            value={form.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="time"
            name="time"
            placeholder="Comfort Time"
            value={form.time}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="number"
            name="days"
            placeholder="Number of Days"
            value={form.days}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setIsAdding(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
            >
              Cancel
            </button>
            <button
              onClick={addHabit}
              className="bg-[#06D6A0] text-white px-4 py-2 rounded-md hover:bg-[#05C38A] transition"
            >
              Save Habit
            </button>
          </div>
        </div>
      )}

      {/* Habit List */}
      <div className="space-y-4 mt-6">
        {habits.length === 0 && !isAdding && (
          <p className="text-gray-500">No habits added yet.</p>
        )}

        {habits.map((habit) => (
          <div
            key={habit.id}
            className="flex justify-between items-center p-4 bg-[#F4F4F4] rounded-md shadow"
          >
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={habit.completed}
                onChange={() => toggleComplete(habit.id)}
                className="w-5 h-5"
              />
              <div>
                <p
                  className={`text-md ${
                    habit.completed
                      ? "line-through text-gray-500"
                      : "text-black"
                  }`}
                >
                  {habit.title}
                </p>
                <p className="text-sm text-gray-600">
                  Time: {habit.time} | Days: {habit.days}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Streak Display */}
              <span className="text-sm text-gray-600">
                Streak: {habit.streak} days
              </span>

              {/* Edit Button */}
              <button
                onClick={() => {
                  const newTitle = prompt("Edit Habit", habit.title);
                  if (newTitle) editHabit(habit.id, newTitle);
                }}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>

              {/* Delete Button */}
              <button
                onClick={() => deleteHabit(habit.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Schedule Component */}
      <div className="mt-8">
        <Schedule
          scheduleData={habits.map((habit) => ({
            time: habit.time || "Anytime",
            title: habit.title,
            color: habit.completed ? "#06D6A0" : "#F94144",
          }))}
        />
      </div>
    </div>
  );
};

export default HabitTracker;
