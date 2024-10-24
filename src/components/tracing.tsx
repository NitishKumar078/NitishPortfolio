"use client";
import GradualSpacing from "./ui/gradual-spacing";
import BlurIn from "./ui/blur-in"
import { TracingBeam } from "./ui/tracing-beam";
import TypingAnimation from './ui/typing-animation';

export function TracingBeamDemo() {

  return (
    <div className="relative border bg-white p-2 md:shadow-xl m-5">
          <TracingBeam
      
    >
      <div className="relative mx-auto max-w-5xl pt-4 md:max-w-4xl">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="mb-4 justify-center rounded-full bg-black px-4 py-1 text-center text-sm text-white">
              <GradualSpacing
                className="text-2xl font-extralight justify-center align-middle text-center text-white"
                text={item.badge}
              />
            </h2>

            <p className="text-white">{item.title}</p>

            <div className="prose prose-sm dark:prose-invert text-sm dark:text-white">
              <BlurIn
                word={item.description}
                className="font-normal text-black"
                variant={{ 
                  hidden: { filter: "blur(10px)", opacity: 0 }, 
                  visible: { filter: "blur(0px)", opacity: 1 }
                }}
                duration={2}
              />
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
    </div>

  );
}


const dummyContent = [
  {
    title: "Education",
    description:
      " In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse veniam fugiat esse qui sint ad sunt reprehenderit do qui proidentreprehenderit. Laborum exercitation aliqua reprehencillum ut mollit.",

    badge: "Education",
     },
  {
    title: "Work",
    description:
      " In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse veniam fugiat esse qui sint ad sunt reprehenderit do qui proidentreprehenderit. Laborum exercitation aliqua reprehencillum ut mollit.",

    badge: "Work",
    },
];

export default TracingBeamDemo;
