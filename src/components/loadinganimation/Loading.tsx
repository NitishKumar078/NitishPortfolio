import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loading = () => {
  const [isClockOn, setClockOn] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setTime(`${hours} : ${minutes} : ${seconds}`);
    };

    setTimeout(() => setClockOn(true), 2000);
    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-white">
      {/* Static White Triangle Background */}

      <motion.div
        className="absolute h-0 w-0 border-b-[400px] border-l-[200px] border-r-[200px] border-transparent border-b-black"
        animate={{ rotateX: 200, rotateY: 200 }} // Adjust these values for the desired tilt
        transition={{
          duration: 1, // Control the speed of the tilt
          ease: "easeInOut", // Smooth easing for a gradual effect
        }}
      />
      <motion.div
        className="absolute h-0 w-0 border-b-[390px] border-l-[190px] border-r-[190px] border-transparent border-b-white"
        animate={{ rotateX: 200, rotateY: 200 }} // Adjust these values for the desired tilt
        transition={{
          duration: 1, // Control the speed of the tilt
          ease: "easeInOut", // Smooth easing for a gradual effect
        }}
      />

      {/* Glitch Effect Layers */}
      <div className="relative text-6xl font-bold tracking-wide text-black sm:text-8xl">
        <span className="relative z-10">{time}</span>
        <span className="animate-glitch1 absolute inset-0 translate-x-1 translate-y-1 transform text-red-600 opacity-75">
          {time}
        </span>
        <span className="animate-glitch2 absolute inset-0 -translate-x-1 -translate-y-1 transform text-blue-600 opacity-75">
          {time}
        </span>
      </div>
      <div className="fixed top-[85vh] sm:left-[48vw]">
        <motion.div
          className="aspect-square w-12 rounded-full"
          style={{
            background: `
          radial-gradient(farthest-side, #D91656 95%, transparent) 50% 1px / 12px 12px no-repeat,
          radial-gradient(farthest-side, transparent calc(100% - 14px), #ccc 0)
        `,
          }}
          animate={{ rotate: 360 }} // Rotate 360 degrees
          transition={{
            repeat: Infinity, // Loop the rotation
            duration: 2, // Complete rotation every 2 seconds
            ease: "linear", // Maintain a smooth, linear rotation
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Loading;
