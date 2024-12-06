import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center"
    >
      <a
        href="/"
        className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-2xl font-bold text-transparent"
      >
        NKM
      </a>
    </motion.div>
  );
};
