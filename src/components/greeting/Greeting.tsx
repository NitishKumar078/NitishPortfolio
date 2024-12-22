import React from "react";
import developer_illustration from "../../assets/developer-illustration.svg";
import TypingAnimation from "../ui/typing-animation";

interface GreetingProps {
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Greeting: React.FC<GreetingProps> = ({ projectsRef, contactRef }) => {
  function getGreeting() {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 0 && hours < 12) {
      return "Morning";
    } else if (hours >= 12 && hours < 18) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  }

  const handleonclick = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative top-5 flex h-screen w-full items-center justify-between">
      <div className="relative flex h-full flex-col items-center justify-center gap-10 px-6 text-center sm:flex-row sm:px-20 sm:text-left">
        {/* Text Content */}
        <div className="w-full">
          <p className="mb-4 text-lg text-gray-800 dark:text-zinc-200">
            Welcome, it's a{" "}
            <span
              className="text-3xl font-semibold text-purple-400"
              id="dynamic-greeting"
            >
              Beautiful <span className="text-4xl">{getGreeting()}!</span>
            </span>
          </p>
          <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-zinc-200 sm:text-3xl">
            I’m{" "}
            <TypingAnimation
              className="inline bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent sm:text-5xl"
              text="Nitish_kumar M"
              duration={250}
            />
            <br />
            a passionate <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent sm:text-4xl">
              Software Developer
            </span>
          </h1>
          <p className="mb-6 text-lg text-gray-800 dark:text-gray-400">
            I craft innovative web experiences with modern frameworks and
            technologies. Let's create something exceptional.
          </p>
          <div className="mt-6 flex animate-slideUp flex-row space-x-4">
            <button
              id="#contact"
              onClick={() => handleonclick(contactRef)}
              className="rounded-lg bg-gradient-to-tr from-[#6a11cb] to-[#2575fc] px-6 py-3 text-lg text-white shadow-lg transition duration-300 hover:shadow-[0px_4px_15px_4px_rgba(106,17,203,0.8)]"
            >
              Get in Touch
            </button>
            <button
              id="#projects"
              onClick={() => handleonclick(projectsRef)}
              className="rounded-lg border-2 border-[#6a11cb] bg-gray-800 px-6 py-3 text-lg text-white shadow-lg transition duration-300 hover:bg-[#6a11cb]"
            >
              View My Work
            </button>
          </div>
        </div>

        <div className="hidden items-center justify-center sm:block sm:w-4/5">
          {/* Semi-Circle Background */}
          <div className="absolute -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-b from-purple-500 via-pink-400 to-orange-200 opacity-40 sm:h-[450px] sm:w-[450px]"></div>

          {/* SVG Illustration */}
          <img
            src={developer_illustration}
            alt="Developer Illustration"
            className="relative z-10 w-[250px] sm:w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Greeting;
