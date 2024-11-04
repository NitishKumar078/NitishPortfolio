// Button53.tsx
import React from "react";
import TypingAnimation from "./typing-animation";

const Button: React.FC = () => {
  return (
    <button className="relative flex w-full max-w-lg rotate-[-2deg] transform cursor-pointer select-none items-center justify-center border-0 bg-[#9B7EBD] px-7 py-3 text-base font-bold text-black focus:outline-none md:px-12 md:py-3 md:text-lg">
      <TypingAnimation
        text="LET'S CONNECT"
        duration={50}
        className="text-white"
      />
      <span className="absolute bottom-1 left-1 h-[calc(100%-2px)] w-[calc(100%-2px)] border border-black transition-all duration-200 ease-in-out"></span>
    </button>
  );
};

export default Button;
