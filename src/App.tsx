"use client";
import { Projects } from "./components/Projects";
import { Greeting } from "./components/Greeting";
import { NavigationBar } from "./components/NavigationBar";
import { TracingBeamDemo } from "./components/tracing";
import FlickeringGrid from "./components/ui/flickering-grid";
import { DotPattern } from "./components/ui/dot-pattern";
import { cn } from "@/utils/cn";

export function App() {
  return (
    <div className="relative">
      <NavigationBar />
      {/* <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:radial-gradient(white, transparent)]")}
      /> */}
      <FlickeringGrid
        className="absolute h-full w-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      <Greeting />

      {/* {This is the section of ABOUT} */}
      <div className="relative top-80 block justify-center">
        <h2 className="border-slate-300 p-3 text-center font-Permanent_Marker text-4xl">
          ABOUT
        </h2>
        <TracingBeamDemo />
      </div>

      {/* {This is the section of PROJECT} */}
      <div className="relative flex flex-col top-80  justify-center">
        <h2 className="border-slate-300 p-3 text-center font-Permanent_Marker text-4xl">
          PROJECTS
        </h2>
        <div className="absolute ml-5 top-5 flex flex-row space-x-80 p-2">
          <Projects
            heading="Project_1"
            sub_heading="sub_Project_1"
            title="Project_1"
            href="https://github.com/NitishKumar078"
          />
          <Projects
            heading="Project_2"
            sub_heading="sub_Project_2"
            title="Project_2"
            href="https://github.com/NitishKumar078"
          />
          <Projects
            heading="Project_3"
            sub_heading="sub_Project_3"
            title="Project_3"
            href="https://github.com/NitishKumar078"
          />
        </div>
        {/* {This is the section of SKILL} */}
        <div className="relative flex flex-col top-56  justify-center">
          <h2 className="border-slate-300 text-center font-Permanent_Marker text-4xl">
            SKILL
          </h2>
          
        </div>
      </div>
    </div>
  );
}

export default App;
