import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center"
    >
      <a href="/" className="text-2xl font-bold text-zinc-900 dark:text-white">
        NKM
      </a>
    </motion.div>
  );
};
