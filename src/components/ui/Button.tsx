import React from "react";
import TypingAnimation from "./typing-animation";

const Button: React.FC = () => {
  return (
    <button className="group relative w-full max-w-xs transform cursor-pointer select-none rounded bg-[#9B7EBD] px-4 py-2 text-base font-bold text-white transition-transform hover:scale-105 focus:outline-none sm:max-w-sm md:px-8 md:py-3 md:text-lg">
      <TypingAnimation
        text="LET'S CONNECT"
        duration={50}
        className="relative z-10"
      />
      <span className="absolute inset-0 translate-x-1 translate-y-1 rounded border border-black transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
    </button>
  );
};

export default Button;