import React from 'react'
import { TypewriterEffectDemo } from './components/TypewriterEffectDemo'
import Dashboard from './components/Dashboard'
import HeroSection from './components/Herosection'
import HabitTracker from './components/HabitTracker'
import Navbar2 from './components/navbar2'
import { BrowserRouter as Router } from "react-router-dom";
import ProfilePage from './components/ProfilePage'
import AboutPage from './components/AboutPage'
import HeroSection2 from './components/HeroSection2'
import Main from './components/Main'

const App = () => {
  const initialUser = {
    name: "Aditya Sharma",
    jobTitle: "Frontend Developer",
    location: "Mumbai, India",
    image: "https://via.placeholder.com/150",
    work: [
      { title: "Spotify New York", type: "Primary" },
      { title: "Metropolitan Museum", type: "Secondary" },
    ],
    skills: ["JavaScript", "ReactJS", "UI/UX"],
    about: "Passionate about creating immersive web experiences.",
    phone: "+91-9876543210",
    email: "aditya@example.com",
    website: "www.adityasharma.dev",
    birthday: "June 5, 1992",
    gender: "Male",
  };
  
  const initialHabits = [
    { title: "Morning Meditation", days: "Monday to Friday", time: "6:30 AM" },
    { title: "Workout", days: "Daily", time: "7:00 AM" },
  ];
  
  return (
    <div>
      <Main/>
    </div>
  )
}

export default App
