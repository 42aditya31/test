"use client"; // If you're using Next.js with server components
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { BackgroundBeams } from "./BackgroundBeams";
import LandingPhoto from "../assets/landingpage.png";

export const HeroSection = () => {
  const sectionRef = useRef(null);
  const lettersRef = useRef([]);
  const circleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate the middle 'A' first
    timeline.fromTo(
      lettersRef.current[4], // Ref for the middle letter 'A'
      { scale: 3, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Fade in other letters sequentially
    lettersRef.current.forEach((letter, index) => {
      if (index !== 4) {
        timeline.fromTo(
          letter,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.3" // Slight overlap with previous animation
        );
      }
    });

    // Reduce opacity to 30 for all letters after animation
    timeline.to(lettersRef.current, {
      opacity: 0.2,
      duration: 0.5,
      ease: "power2.inOut",
    });

    // Add a bouncing circle from the top
    timeline.fromTo(
      circleRef.current,
      { y: "-100%", scale: 0, opacity: 0 },
      {
        y: "0%",
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "bounce.out",
      }
    );

    // Add fade-in animation for the image
    timeline.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.8" // Overlap with the circle animation
    );
  }, []);

  const text = "PRANAFLOW";

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Background Beams */}
      <BackgroundBeams className="opacity-30 absolute inset-0" />

      <div className="relative mt-10 text-center">
        <h1
          ref={sectionRef}
          className="text-[200px] font-black tracking-tight uppercase"
          style={{
            WebkitTextStroke: "2px black", // Black stroke around text
            WebkitTextFillColor: "white", // Fills the text with white
          }}
        >
          {text.split("").map((letter, index) => (
            <span
              key={index}
              ref={(el) => (lettersRef.current[index] = el)}
              style={{
                display: "inline-block",
                WebkitTextFillColor: letter === "A" ? "lightgray" : "white",
              }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <p className="text-2xl tracking-widest font-light text-gray-600 mt-24">
          संस्कारः सेतुं साधनं प्रगतेः
        </p>

        {/* Circle Element */}
        <div
          ref={circleRef}
          className="absolute w-[356px] h-[356px] rounded-full bg-[#073B4C] opacity-0"
          style={{
            transform: "translate(-50%, -50%)",
            top: "50%",
            left: "50%",
          }}
        ></div>

        {/* Image Element */}
        <img
          ref={imageRef}
          src={LandingPhoto}
          alt="Landing Page"
          className="absolute w-[356px] h-[356px] rounded-full"
          style={{
            transform: "translate(-50%, -50%)",
            top: "50%",
            left: "50%",
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
