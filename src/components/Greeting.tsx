import { FlipWords } from "./ui/flip-words";

export const Greeting = () => {
  const words = ["Think", "Code"];
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
    <div className="inline-block pt-24 font-Righteous">
      <div className="flex flex-row">
        <div className="flex bg-white p-2 pr-14 text-5xl font-bold text-neutral-400 sm:text-7xl md:shadow-xl">
          Good
          <div className="pl-1 font-Rubik_Marker_Hatch text-[#ffcc33]">
            {getGreeting()}
          </div>
        </div>
      </div>
      <div className="mt-6 hidden space-x-4 p-2 text-4xl font-normal text-neutral-600 sm:flex">
        Alway make sure you
        <FlipWords words={words} />
      </div>
    </div>
  );
};
