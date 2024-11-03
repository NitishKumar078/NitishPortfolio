"use client";
import {  useRef } from "react";
import { Projects } from "./components/Projects";
import { Greeting } from "./components/Greeting";
import { Navigation } from "./components/Navigation";
import { TracingBeamDemo } from "./components/tracing";
import { DotPattern } from "./components/ui/dot-pattern";
import HyperText from "./components/ui/hyper-text";
import Button from "./components/ui/Button";
import {AnimatedBlog} from "./components/AnimatedBlog";
import mansitting from "@/assets/Problem addicent oops.png";

export function App() {
   // Step 1: Set up refs for each section
   const aboutRef = useRef(null);
   const projectsRef = useRef(null);
   const skillsRef = useRef(null);
 
   // Step 2: Create the scroll function
   const scrollToSection = (ref:React.RefObject<HTMLDivElement>) => {
     ref.current?.scrollIntoView({ behavior: "smooth" });
   };

  return (
    <div className="grid-flow-col">
      {/* background design */}
      <DotPattern className="fixed -z-10 h-screen w-screen" />

      {/* <div className=""> */}
      <Navigation aboutRef={aboutRef} projectsRef={projectsRef} skillsRef={skillsRef} />
      {/* </div> */}


      <div className=" flex flex-row justify-between items-center p-2">
      <Greeting/>
      <img src={mansitting} className="w-1/3 sm:inline-block hidden"/>
      </div>
      

      <div className="flex flex-col justify-center items-center" >
      <span className="font-Rubik_Marker_Hatch text-4xl p-4"> Feel free to skip and connect with me. &#128516;</span>
      <Button/>
      </div>


      {/* {This is the section of ABOUT} */}
      <div ref={aboutRef} className="items-center justify-center m-5">
        <HyperText
          text="ABOUT ME"
          className=" border-slate-300 text-center font-Permanent_Marker text-4xl "
          duration={50}
          animateOnLoad={false}
        />

        <TracingBeamDemo />
      </div>

      {/* {This is the section of PROJECT} */}
      <div ref={projectsRef} className="grid grid-flow-row justify-center">
        <HyperText
          text="PROJECT's"
          className=" border-slate-300 text-center font-Permanent_Marker text-4xl"
          duration={50}
          animateOnLoad={false}
        />

        <div className="grid  sm:grid-flow-col grid-flow-row  gap-4">
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
      <div ref={skillsRef} className="grid-flow-clo  m-10 grid justify-center gap-4 ">
         <HyperText
          text="SKILL's"
          className=" border-slate-300 text-center font-Permanent_Marker text-4xl"
          duration={50}
          animateOnLoad={false}
        />
        <AnimatedBlog/>
      </div>
    </div>
  );
}

export default App;
