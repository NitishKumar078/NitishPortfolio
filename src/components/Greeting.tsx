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
    <div className="absolute top-32 w-[70rem] font-Chakra_Petch">
      <div className="flex flex-row ">
        <div className=" flex  text-7xl text-neutral-400">
          Good
          <div className="pl-1 text-[#64FFDA]">{getGreeting()}</div>
        </div>
      </div>
      <div className="mx-auto flex  text-6xl font-normal text-neutral-600 dark:text-neutral-400">
        Good at
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
};