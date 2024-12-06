import React from "react";
import { motion } from "framer-motion";
import profile from "@/assets/profile.svg";

export const ProfileImage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="border-gradient relative mx-auto h-80 w-80 overflow-hidden rounded-2xl border-4 shadow-xl"
    >
      <img
        src={profile}
        alt="Professional headshot"
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
};
