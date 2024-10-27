"use client";
import { Projects } from "./components/Projects";
import { Greeting } from "./components/Greeting";
import { NavigationBar } from "./components/NavigationBar";
import { TracingBeamDemo } from "./components/tracing";
import Skill from "./components/Skill.tsx";
import { DotPattern } from "./components/ui/dot-pattern";
import HyperText from "./components/ui/hyper-text";
import mansitting from "@/assets/Problem addicent oops.png";

export function App() {
  return (
    <div className="grid-flow-col">
      {/* background design */}
      <DotPattern className="fixed -z-10 h-screen w-screen" />

      {/* {This is the section of NAVIGATION} */}
      <div className="glass_effect">
        <NavigationBar />
        
      </div>

      <div className=" grid-flow-row justify-center items-center">
      <Greeting/>
      <img src={mansitting} className=" w-1/3 inline-block"/>
      </div>
      

      <div>
      <span className="font-Protest_Revolution text-4xl">Think before you click me </span>
      </div>


      {/* {This is the section of ABOUT} */}
      <div className="items-center justify-center">
        <HyperText
          text="ABOUT ME"
          className=" border-slate-300 text-center font-Permanent_Marker text-4xl"
          duration={50}
          animateOnLoad={false}
        />

        <TracingBeamDemo />
      </div>

      {/* {This is the section of PROJECT} */}
      <div className="grid grid-flow-row justify-center">
        <HyperText
          text="PROJECT's"
          className=" border-slate-300 text-center font-Permanent_Marker text-4xl"
          duration={50}
          animateOnLoad={false}
        />

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
      <div className="grid-flow-clo top-56 m-10 grid justify-center gap-4 p-2">
         <HyperText
          text="SKILL's"
          className=" border-slate-300 text-center font-Permanent_Marker text-4xl"
          duration={50}
          animateOnLoad={false}
        />
        <Skill />
      </div>
    </div>
  );
}

export default App;
