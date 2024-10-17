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
    <div className="top-5 inline-block font-Chakra_Petch">
      <div className="flex flex-row ">
        <div className=" flex  text-7xl text-neutral-400 bg-white  md:shadow-xl">
          Good
          <div className="pl-1 text-[#64FFDA]">{getGreeting()}</div>
        </div>
      </div>
      <div className="mx-auto flex  m-2 p-2 text-6xl font-normal text-neutral-600 dark:text-white ">
        {/* Good at */}
        <div className=" bg-custom-image2 bg-contain bg-white bg-no-repeat bg-center  w-[15vw] h-[20vh] shadow-xl  "> fdsjflkds</div>
        {/* <FlipWords words={words} className=" bg-custom-image bg-contain bg-no-repeat bg-center  " /> <br /> */}
      </div>
    </div>
  );
};
