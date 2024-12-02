import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Loading.css";

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
    <div className="relative flex h-screen w-full items-center justify-center">
      {/* Dark Theme Triangle Background */}
      <motion.div
        className="absolute h-0 w-0 border-b-[400px] border-l-[200px] border-r-[200px] border-b-[#9234eb] border-l-transparent border-r-transparent"
        animate={{ rotateX: 200, rotateY: 200 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.div
        className="border-dotted-pattern-light dark:border-dotted-pattern absolute h-0 w-0 border-b-[390px] border-l-[190px] border-r-[190px] border-l-transparent border-r-transparent dark:border-l-transparent dark:border-r-transparent"
        animate={{ rotateX: 200, rotateY: 200 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Glitch Effect Clock */}
      <div className="loader">
        <div
          data-glitch={time}
          className="glitch text-6xl font-bold tracking-wide text-zinc-100 sm:text-8xl"
        >
          {time}
        </div>
      </div>

      {/* Loading Spinner */}
      <div className="fixed top-[85vh] sm:left-[48vw]">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex h-16 w-16 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-blue-400 text-4xl text-blue-400">
            <div className="flex h-12 w-12 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-red-400 text-2xl text-red-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
