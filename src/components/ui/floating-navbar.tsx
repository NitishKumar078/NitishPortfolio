/* eslint-disable @typescript-eslint/no-explicit-any */
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
  navItems,
  className,
}: {
  navItems: {
    name: string;
    icon?: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0) {
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
          duration: 0.2,
        }}
        className={cn(
          "fixed right-20 top-7 z-[5000] mx-auto flex max-w-fit space-x-4 rounded-full dark:border dark:border-[#38ffd1] dark:bg-[#ace1df0a] py-2 pl-5 pr-5  dark:border-white/[0.2]",
          className,
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <div
            key={`link=${idx}`}
            className={cn(
              "relative flex items-center space-x-1 font-medium text-neutral-600 hover:text-neutral-500 dark:text-neutral-100 dark:hover:text-neutral-700 dark:hover:underline-offset-auto  dark:hover:",
            )}
          >
            {navItem.icon && (
              <img
                src={navItem.icon}
                alt={navItem.name}
                className="h-7 w-7 mix-blend-multiply"
              />
            )}
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-m hidden sm:block">{navItem.name}</span>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
