// Button53.tsx
import React from "react";
import TypingAnimation from "./typing-animation";

const Button: React.FC = () => {
  return (
    <button className="relative w-full max-w-lg bg-[#9B7EBD] text-black font-bold text-base md:text-lg md:py-3 md:px-12 py-3 px-7 flex justify-center items-center cursor-pointer rotate-[-2deg] transform select-none focus:outline-none border-0">
      <TypingAnimation
        text="LET'S CONNECT" 
        duration={50}
        className="text-white"
        />
      <span className="absolute border border-black bottom-1 left-1 w-[calc(100%-2px)] h-[calc(100%-2px)] transition-all duration-200 ease-in-out"></span>
    </button>
  );
};

export default Button;
