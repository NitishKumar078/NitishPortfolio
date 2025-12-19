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
      <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-justify md:text-lg">
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
          className="btn-primary px-6 py-3 text-base font-medium md:text-lg"
          download="nishkumar562@gmail.com.pdf"
          aria-label="Download resume PDF"
        >
          Download Resume
        </a>
      </div>
    </motion.div>
  );
};
