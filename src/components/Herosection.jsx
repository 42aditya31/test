"use client"; // If you're using Next.js with server components
import React, { useEffect, useState } from "react";
import { BackgroundBeams } from "./BackgroundBeams";
import { motion } from "framer-motion";

const slokas = [
  [
    "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
    "मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||", // Gita 2.47
  ],
  [
    "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत",
    "अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ||", // Gita 4.7
  ],
  [
    "वासांसी जिर्णानी यथा विहाय नवानि गृह्णाति नरोऽपराणि",
    "तथा शरीराणि विहाय जिर्णान्यन्यानि संयाति नवानी देही ||", // Gita 2.22
  ],
  [
    "दिवि सूर्यमणि चक्रे यत्र पतति नान्यत:",
    "यज्ञे हि नाम कर्माणि सर्वे शिवे करिष्यति ||", // Gita 3.16
  ],
];

const getCurrentSloka = () => {
  const lastUpdated = localStorage.getItem("lastUpdated");
  const currentTime = new Date().getTime();

  if (!lastUpdated || currentTime - lastUpdated > 24 * 60 * 60 * 1000) {
    const randomSloka = slokas[Math.floor(Math.random() * slokas.length)];
    localStorage.setItem("currentSloka", JSON.stringify(randomSloka));
    localStorage.setItem("lastUpdated", currentTime);
    return randomSloka;
  }

  return JSON.parse(localStorage.getItem("currentSloka")) || slokas[0];
};

export const HeroSection = () => {
  const [sloka, setSloka] = useState(["", ""]);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    setSloka(getCurrentSloka());

    const timers = [];
    timers.push(
      setTimeout(() => {
        setLineIndex(1);
      }, 2000) // Wait 2 seconds for the first line
    );

    timers.push(
      setTimeout(() => {
        setLineIndex(2);
      }, 4000) // Wait 2 more seconds for the second line
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Background Beams */}
      <BackgroundBeams className="opacity-30 absolute inset-0" />

   
    </div>
  );
};

export default HeroSection;
