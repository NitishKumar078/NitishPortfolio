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
      className="space-y-6 font-sans sm:p-1"
    >
      {/* Title */}
      <GradualSpacing
        className="text-center font-sans text-3xl font-bold text-zinc-800 dark:text-zinc-100 md:text-left"
        text="Software Developer"
      />

      {/* Description */}
      <p className="font-sans text-base leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-justify md:text-lg">
        Hi, I'm Nitish kumar passionate software developer with a strong
        background in computer science. I love building things that make a
        difference, whether it's a user-friendly app or a powerful tool behind
        the scenes. I've worked with Python, C#, Java, React.js, and Electron,
        and I enjoy turning ideas into scalable, reliable solutions. I'm always
        eager to learn, solve interesting problems, and create great experiences
        for users through thoughtful design and engineering.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:justify-start">
        <a
          href={resume}
          className="rounded-lg bg-gradient-to-tr from-[#6a11cb] to-[#2575fc] px-6 py-3 text-base text-white shadow-lg transition duration-300 hover:shadow-[0px_4px_15px_4px_rgba(106,17,203,0.8)] md:text-lg"
          download="nishkumar562@gmail.com.pdf"
        >
          Download Resume
        </a>
      </div>
    </motion.div>
  );
};
