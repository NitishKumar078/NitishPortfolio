"use client";

import { useEffect, useState } from "react";

import  cn  from "../../utils/cn";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

/**
 * A component that renders a typing animation for the given text.
 *
 * @param text - The text to animate.
 * @param duration - The duration of the animation in milliseconds. Defaults to 200.
 * @param className - An optional class name to add to the rendered element.
 *
 * @example
 * <TypingAnimation text="Hello, World!" />
 */
export default function TypingAnimation({
  text,
  duration = 50,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i]);

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {displayedText ? displayedText : text}
    </h1>
  );
}
