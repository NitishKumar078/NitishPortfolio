import { motion } from "framer-motion";
import profileImage from "@/assets/Blues illustrations.png";

export const ProfileSection = () => {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-64 w-64 overflow-hidden rounded-2xl border-4 border-purple-500/20 shadow-xl"
      >
        <img
          src={profileImage}
          alt="Professional headshot"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-2xl space-y-4 text-center md:text-left"
      >
        <h2 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">About Me</h2>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
          As a passionate full-stack developer with over 5 years of experience, I specialize in creating elegant solutions to complex problems. My expertise spans modern web technologies, with a particular focus on React, Node.js, and cloud architecture. I've led multiple successful projects from conception to deployment, consistently delivering high-quality, scalable applications that drive business growth.
        </p>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
          Beyond coding, I'm an active open-source contributor and technical writer, sharing knowledge and best practices with the developer community. I thrive in collaborative environments and am always eager to tackle new challenges that push the boundaries of what's possible in web development.
        </p>
      </motion.div>
    </div>
  );
};