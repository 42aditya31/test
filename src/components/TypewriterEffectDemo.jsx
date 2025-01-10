"use client";

import { motion } from "framer-motion";

/**
 * Utility function for conditional class names
 * @param  {...any} classes
 * @returns string
 */
const cn = (...classes) => classes.filter(Boolean).join(" ");

export function TypewriterEffectDemo() {
  const words = [
    { text: "Build " },
    { text: "awesome " },
    { text: "apps " },
    { text: "with " },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <TypewriterEffect words={words} cursorClassName="bg-blue-500" />
    </div>
  );
}

export const TypewriterEffect = ({ words, cursorClassName }) => {
  return (
    <div className="flex items-center text-lg md:text-3xl lg:text-5xl font-bold">
      <motion.div
        className="inline-block overflow-hidden whitespace-nowrap"
        initial={{ width: 0 }}
        animate={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {words.map((word, idx) => (
          <span
            key={idx}
            className={cn("dark:text-black text-black", word.className)}
          >
            {word.text}
          </span>
        ))}
      </motion.div>
      <motion.span
        className={cn(
          "inline-block w-[4px] h-6 md:h-8 lg:h-10 rounded bg-blue-500",
          cursorClassName
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      ></motion.span>
    </div>
  );
};
