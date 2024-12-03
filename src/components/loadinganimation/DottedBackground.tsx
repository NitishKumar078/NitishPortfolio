import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface DotProps {
  x: number;
  y: number;
  delay: number;
}

const Dot = ({ x, y, delay }: DotProps) => {
  return (
    <motion.div
      className="absolute size-2 rounded-full bg-gray-400/30 dark:bg-gray-600/30"
      style={{ left: `${x}px`, top: `${y}px` }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export const DottedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const updateDots = () => {
      if (!containerRef.current) return;
      controls.start({ opacity: 1 });
    };

    updateDots();
    window.addEventListener("resize", updateDots);
    return () => window.removeEventListener("resize", updateDots);
  }, [controls]);

  const generateDots = () => {
    const dots = [];
    const spacing = 40;
    const rows = 21;
    const cols = 21;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const delay = (i + j) * 0.1;
        dots.push(
          <Dot
            key={`${i}-${j}`}
            x={j * spacing}
            y={i * spacing}
            delay={delay}
          />,
        );
      }
    }
    return dots;
  };

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <div className="relative h-full w-full">{generateDots()}</div>
    </motion.div>
  );
};
