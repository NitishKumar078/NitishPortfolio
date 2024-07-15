"use client";
import { cn } from "../../utils/cn";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {


  return (
    <div
      className={cn(
        "relative h-dvh flex items-center bg-white dark:bg-black justify-center w-full group",
        containerClassName
      )}
      
    >
      <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-600  pointer-events-none" />
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

