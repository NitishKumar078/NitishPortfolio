"use client";
import { Projects } from "./components/Projects";
import { Greeting } from "./components/Greeting";
import { NavigationBar } from "./components/NavigationBar";
import { TracingBeamDemo } from "./components/tracing";

export function App() {
  return (
    <div className="flex dark:bg-[#0A192F] ">
      <NavigationBar />
      <Greeting />
      <div className=" flex flex-col pl-28 pt-6">
      <TracingBeamDemo /> 
      <Projects />
      </div>


      {/* <div className="fixed bottom-1 left-36 bg-transparent text-7xl font-normal text-gray-700 decoration-double">
        Nitish kumar
      </div> */}
    </div>
  );
}

export default App;
