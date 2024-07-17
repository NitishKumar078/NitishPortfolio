"use client";
import { PinContainer } from "./ui/3d-pin";

export const Projects = () =>{
  return (
    <div className="flex flex-grow items-start">
      <div className="card flex w-fit">
        <PinContainer
          title="/nitish.com"
          href="https://github.com/NitishKumar078"
        >
          <div className="flex h-[8rem] w-[7rem] basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2">
            <h3 className="-m-2 max-w-xs !pb-1 font-semibold text-slate-100">
              Aceternity UI
            </h3>
            <div className="font-thin text-si">
              <span className=" text-slate-300">Customizable</span>
            </div>
            <div className="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>
    </div>
  );
}

