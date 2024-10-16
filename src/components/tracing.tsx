"use client";
import TypingAnimation from "./ui/typing-animation";
import HyperText from "./ui/hyper-text";
import BlurIn from "./ui/blur-in"
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamDemo() {

  return (
    <TracingBeam
      className="relative border bg-white p-2 md:shadow-xl"
    >
      <div className="relative mx-auto max-w-5xl pt-4 md:max-w-4xl">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="mb-4 justify-center rounded-full bg-black px-4 py-1 text-center text-sm text-white">
              <HyperText
                className="text-2xl font-extralight justify-center align-middle text-center text-white"
                text={item.badge}
                duration={5}
              />
            </h2>

            <p className="text-white">{item.title}</p>

            <div className="prose prose-sm dark:prose-invert text-sm dark:text-white">
              <BlurIn
                word={item.description}
                className="font-extralight text-black"
                variant={{ 
                  hidden: { filter: "blur(10px)", opacity: 0 }, 
                  visible: { filter: "blur(0px)", opacity: 1 }
                }}
                duration={3}
              />
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}


const dummyContent = [
  {
    title: "Education",
    description:
      " In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse veniam fugiat esse qui sint ad sunt reprehenderit do qui proidentreprehenderit. Laborum exercitation aliqua reprehencillum ut mollit.",

    badge: "Education",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Work",
    description:
      " In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse veniam fugiat esse qui sint ad sunt reprehenderit do qui proidentreprehenderit. Laborum exercitation aliqua reprehencillum ut mollit.",

    badge: "Work",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default TracingBeamDemo;
