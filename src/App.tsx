"use client";
import { Projects } from "./components/Projects";
import { Greeting } from "./components/Greeting";
import { NavigationBar } from "./components/NavigationBar";
import { TracingBeamDemo } from "./components/tracing";
import { DotPattern } from "./components/ui/dot-pattern";


export function App() {
  return (
    <div className="grid-flow-col">
      <NavigationBar />
      <DotPattern className="fixed h-screen w-screen -z-10" />
      <Greeting />
      {/* {This is the section of ABOUT} */}
      <div className="justify-center">
        <h2 className="border-slate-300 p-3 text-center font-Permanent_Marker text-4xl">
          ABOUT
        </h2>
        <TracingBeamDemo />
      </div>

      {/* {This is the section of PROJECT} */}
      <div className="grid grid-flow-row justify-center">
        <h2 className="border-slate-300 p-3 text-center font-Permanent_Marker text-4xl">
          PROJECTS
        </h2>
        <div className="grid grid-flow-col gap-4">
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

      </div>
      {/* {This is the section of SKILL} */}
      <div className=" flex flex-col top-56  justify-center">
        <h2 className="border-slate-300 text-center font-Permanent_Marker text-4xl">
          SKILL
        </h2>
      </div>
    </div>
  );
}

export default App;