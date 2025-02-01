// components/ui/confetti.tsx
import { motion } from "framer-motion";

export const Confetti = () => {
  return Array.from({ length: 30 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute h-2 w-2 rounded-full bg-gradient-to-tr from-[#ffd700] to-[#ff6b6b]"
      initial={{
        opacity: 1,
        scale: 0,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
      }}
      animate={{
        scale: [0, 1, 0],
        opacity: [1, 0],
        x: Math.random() * 400 - 200,
        y: Math.random() * 400 - 200,
      }}
      transition={{
        duration: 1.5 + Math.random() * 1,
        delay: 0.1 * i,
      }}
    />
  ));
};
