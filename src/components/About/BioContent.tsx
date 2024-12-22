import React from "react";
import { motion } from "framer-motion";
import GradualSpacing from "../ui/gradual-spacing";
import resume from "@/assets/nishkumar562@gmail.com.pdf";

export const BioContent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="space-y-6 sm:p-1"
    >
      {/* Title */}
      <GradualSpacing
        className="text-center text-3xl font-bold text-zinc-800 dark:text-zinc-100 md:text-left"
        text="Software Developer"
      />

      {/* Description */}
      <p className="font-sans text-lg font-bold leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-justify">
        With a solid foundation in computer science and experience in software
        development, I specialize in building efficient, user-centric solutions
        using technologies like Python, C#, Java, React.js, and Electron. I am
        passionate about solving complex problems through innovative system
        design, developing scalable tools, and creating seamless user
        experiences.
      </p>

      {/* Call-to-Action Button */}
      <div className="mt-6 flex justify-center md:justify-start">
        <a
          href={resume}
          className="transform rounded-lg bg-gradient-to-tr from-[#6a11cb] to-[#2575fc] px-6 py-3 font-medium text-white shadow-md transition-transform hover:scale-105"
          download="nishkumar562@gmail.com.pdf"
        >
          Download Resume
        </a>
      </div>
    </motion.div>
  );
};
