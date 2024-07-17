"use client";
import { Projects } from "./components/Projects";
import { Greeting } from "./components/Greeting";
import { NavigationBar } from "./components/NavigationBar";

export function App() {
  return (
    <div>
      <Greeting />
      <Projects />
      <NavigationBar />
      <div className="fixed bottom-1 left-36 bg-transparent text-7xl font-normal text-gray-700 decoration-double">
        Nitish kumar
      </div>
    </div>
  );
}

export default App;
