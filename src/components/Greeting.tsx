import { FlipWords } from "./ui/flip-words";

export const Greeting = () => {
  const words = ["building", "coffee", "code", "tech"];
  function getGreeting() {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 0 && hours < 12) {
      return " Morning!!!";
    } else if (hours >= 12 && hours < 18) {
      return " Afternoon!!!";
    } else {
      return " Evening!!!";
    }
  }

  return (
    <div className="font-Righteous top-5 inline-block">
      <div className="flex flex-row">
        <div className="flex bg-white p-2 pr-14 text-7xl font-bold text-neutral-400 md:shadow-xl">
          Good
          <div className="font-Rubik_Marker_Hatch pl-1 text-[#ffcc33]">
            {getGreeting()}
          </div>
        </div>
      </div>
      <div className="m-4 mx-auto flex p-5 text-6xl font-normal text-neutral-600 dark:text-white space-x-5">
        Good at
        <FlipWords words={words} /> 
      </div>
    </div>
  );
};
