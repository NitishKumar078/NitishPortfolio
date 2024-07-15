"use client";
import { HeroHighlight } from "./components/ui/hero-highlight";
import { FlipWords } from "./components/ui/flip-words";
import { PinContainer } from "./components/ui/3d-pin";

export function App() {

  const words = ["building", "coffee", "code", "tech"];

  function getGreeting() {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 0 && hours < 12) {
      return " morning !!!";
    } else if (hours >= 12 && hours < 18) {
      return " afternoon !!!";
    } else {
      return " evening !!!";
    }
  }


  return (
    <HeroHighlight className="flex flex-col h-screen">
      <>
        <div className="flex-grow flex items-start justify-start ">
          <div className="Greeting flex text-7xl font-normal text-neutral-400">
            Good
            <div className="pl-5 text-neutral-50">{getGreeting()}</div>
          </div>

        </div>
        <div className="text-7xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Good at
          <FlipWords words={words} /> <br />
          Nitish
        </div>
      </>

      <div className="flex-grow flex items-center justify-center">
        <div className="card flex w-fit">
          <PinContainer
            title="/nitish.com"
            href="https://github.com/NitishKumar078"
          >
            <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                Aceternity UI
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  Customizable Tailwind CSS and Framer Motion Components.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>
      </div>

      <div className="flex-grow flex items-end ">
        <div className="text-6xl w-5  font-normal text-neutral-100 bg-transparent">
          Nitish kumar
        </div>
      </div>
    </HeroHighlight>

  );
}

export default App
