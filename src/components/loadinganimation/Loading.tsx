import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loading = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setTime(`${hours} : ${minutes} : ${seconds}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-zinc-900">
      {/* Dark Theme Triangle Background */}
      <motion.div
        className="absolute h-0 w-0 border-b-[400px] border-l-[200px] border-r-[200px] border-b-black border-l-transparent border-r-transparent dark:border-b-purple-600/20"
        animate={{ rotateX: 200, rotateY: 200 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute h-0 w-0 border-b-[390px] border-l-[190px] border-r-[190px] border-b-white border-l-transparent border-r-transparent dark:border-b-zinc-900"
        animate={{ rotateX: 200, rotateY: 200 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      />

      {/* Glitch Effect Clock */}
      <div className="relative text-6xl font-bold tracking-wide text-black dark:text-zinc-100 sm:text-8xl">
        <span className="relative z-10">{time}</span>
        <span className="absolute inset-0 translate-x-1 translate-y-1 transform animate-glitch1 text-red-600 dark:text-purple-500/75">
          {time}
        </span>
        <span className="absolute inset-0 -translate-x-1 -translate-y-1 transform animate-glitch2 text-blue-600 dark:text-cyan-400/75">
          {time}
        </span>
      </div>

      {/* Loading Spinner */}
      <div className="fixed top-[85vh] sm:left-[48vw]">
        <motion.div
          className="aspect-square w-12 rounded-full"
          style={{
            background: `
              radial-gradient(farthest-side, #9333EA 95%, transparent) 50% 1px / 12px 12px no-repeat,
              radial-gradient(farthest-side, transparent calc(100% - 14px), #1e1e1e 0)
            `,
          }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default Loading;
