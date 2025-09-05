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
    <section className="relative top-5 flex min-h-[70vh] w-full items-center justify-between">
      <div className="relative flex h-full flex-col items-center justify-center gap-10 px-6 text-center sm:flex-row sm:px-20 sm:text-left">
        {/* Text Content */}
        <div className="w-full">
          <p className="mb-4 text-3xl text-muted-foreground">
            Welcome, it's a{" "}
            <span
              className="text-3xl font-semibold text-primary"
              id="dynamic-greeting"
            >
              Beautiful <span className="text-4xl">{getGreeting()}!</span>
            </span>
          </p>
          <h1 className="mb-4 text-4xl font-semibold sm:text-3xl">
            I’m{" "}
            <TypingAnimation
              className="inline bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent sm:text-5xl"
              text="Nitish_kumar M"
              duration={250}
            />
            <br />
            a passionate <br />
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent sm:text-4xl">
              Software Developer
            </span>
          </h1>
          <p className="mb-6 text-lg text-muted-foreground">
            I craft innovative web experiences with modern frameworks and
            technologies. Let's create something exceptional.
          </p>
          <div className="mt-6 flex animate-slideUp flex-row space-x-4">
            <button
              id="#contact"
              onClick={() => handleonclick(contactRef)}
              className="btn-primary px-6 py-3 text-lg"
            >
              Get in Touch
            </button>
            <button
              id="#projects"
              onClick={() => handleonclick(projectsRef)}
              className="rounded-lg border-2 border-border px-6 py-3 text-lg text-foreground shadow-soft transition-colors hover:bg-muted"
            >
              View My Work
            </button>
          </div>
        </div>

        <div className="hidden items-center justify-center sm:block sm:w-4/5">
          {/* Semi-Circle Background */}
          <div className="absolute -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-b from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-rose-300 opacity-30 blur-2xl sm:h-[450px] sm:w-[450px]"></div>

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
