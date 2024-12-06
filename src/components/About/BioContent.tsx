import React from "react";
import { motion } from "framer-motion";

export const BioContent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="space-y-4"
    >
      <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
        Full Stack Developer
      </h3>

      <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
        With over 5 years of experience in web development, I specialize in
        creating elegant solutions to complex problems. My expertise spans
        modern web technologies, with a particular focus on React, Node.js, and
        cloud architecture.
      </p>

      <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
        I'm passionate about building scalable applications that make a real
        impact. When I'm not coding, you'll find me contributing to open-source
        projects and sharing knowledge with the developer community.
      </p>

      <div className="flex gap-4">
        <a
          href="/resume.pdf"
          className="rounded-lg bg-gradient-to-tr from-[#6a11cb] to-[#2575fc] px-6 py-3 text-white transition hover:opacity-90"
        >
          Download Resume
        </a>
      </div>
    </motion.div>
  );
};
