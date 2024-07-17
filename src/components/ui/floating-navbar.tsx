"use client";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../utils/cn";

export const FloatingNav = ({
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.0) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className={cn(
          "fixed right-20 top-5 z-[5000] mx-auto flex max-w-fit  space-x-4 rounded-full border border-transparent bg-white py-2 pl-5 pr-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black",
          className,
        )}
      >
        <span className="relative rounded-full text-sm font-medium text-black dark:border-white/[0.2] dark:text-white">
          Home
        </span>
        <span className="relative rounded-full text-sm font-medium text-black dark:border-white/[0.2] dark:text-white">
          Project
        </span>
        <span className="relative rounded-full text-sm font-medium text-black dark:border-white/[0.2] dark:text-white">
          Work
        </span>
      </motion.div>
    </AnimatePresence>
  );
};
