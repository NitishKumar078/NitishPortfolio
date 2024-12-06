import React from "react";
import developer_illustration from "../../assets/developer-illustration.svg";

const Greeting: React.FC = () => {
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
  return (
    <section className="relative top-5 flex h-screen w-full items-center justify-between">
      <div className="relative flex h-full flex-col items-center justify-center gap-40 px-6 text-center text-gray-700 dark:text-white sm:flex-row sm:px-20 sm:text-left">
        {/* Text Content */}
        <div className="w-full">
          <p className="mb-4 text-lg text-gray-300">
            Welcome, it's a{" "}
            <span
              className="font-semibold text-purple-400"
              id="dynamic-greeting"
            >
              beautiful <span className="text-3xl">{getGreeting()}</span>!
            </span>
          </p>
          <h1 className="mb-4 text-4xl font-bold sm:text-3xl">
            I’m{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent sm:text-5xl">
              NITISH_KUMAR
            </span>
            , a passionate <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent sm:text-4xl">
              Software Developer
            </span>
          </h1>
          <p className="mb-6 text-lg text-gray-800 dark:text-gray-400">
            I craft innovative web experiences with modern frameworks and
            technologies. Let's create something exceptional.
          </p>
          <div className="animate-slideUp mt-6 space-x-4">
            <a
              href="#contact"
              className="rounded-lg bg-gradient-to-tr from-[#6a11cb] to-[#2575fc] px-6 py-3 text-lg text-white shadow-lg transition duration-300 hover:opacity-90"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="rounded-lg bg-gray-800 px-6 py-3 text-lg text-white shadow-lg transition duration-300 hover:bg-gray-700"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Hero Image and Semi-Circle Design */}
        <div className="relative mt-12 flex items-center justify-center sm:mt-0 sm:w-4/5">
          {/* Semi-Circle Background */}
          <div className="absolute top-0 -z-10 h-[400px] w-[800px] rounded-full bg-gradient-to-b from-purple-400 via-purple-300 to-purple-100 opacity-30 sm:h-[500px] sm:w-[500px]"></div>
          <div className="absolute top-10 h-[280px] w-[380px] rounded-full bg-[#c083fc] opacity-40 sm:h-[350px] sm:w-[350px]"></div>

          {/* SVG Illustration */}
          <img
            src={developer_illustration}
            alt="Developer Illustration"
            className="relative z-10 w-[250px] sm:size-[375px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Greeting;
