"use client";
import { useEffect, useState } from "react";
import { PinContainer } from "./ui/3d-pin";

interface ProjectsProps {
  heading: string;
  sub_heading: string;
  title: string;
  href: string;
  className?: string;
}
export const Projects = ({
  heading,
  sub_heading,
  title,
  href,
  className,
}: ProjectsProps) => {
  const [classname, setclassname] = useState("");

  useEffect(() => {
    setclassname(className + "absolute flex h-52  ml-20");
  }, []);
  return (
    <div className={classname}>
      <div className="card flex w-fit">
        <PinContainer title={title} href={href}>
          <div className="flex h-[8rem] w-[7rem] basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2">
            <h3 className="-m-2 max-w-xs !pb-1 font-semibold text-slate-100">
              {heading}
            </h3>
            <div className="text-si font-thin">
              <span className="text-slate-300">{sub_heading}</span>
            </div>
            <div className="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>
    </div>
  );
};
