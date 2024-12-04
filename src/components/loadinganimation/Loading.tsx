import { useEffect, useState } from "react";
import { ClockFace } from "./ClockFace";
import { TriangleBackground } from "./TriangleBackground";
import { DottedBackground } from "./DottedBackground";
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
    <div className="relative flex h-screen w-full items-center justify-center bg-zinc-50 transition-colors duration-300 dark:bg-zinc-900">
      <DottedBackground />
      <TriangleBackground />
      <div className="relative z-10">
        <ClockFace time={time} />
      </div>
    </div>
  );
};

export default Loading;
