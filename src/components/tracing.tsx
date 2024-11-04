"use client";
import GradualSpacing from "./ui/gradual-spacing";
import BlurIn from "./ui/blur-in";
import { TracingBeam } from "./ui/tracing-beam";
import { BoxReveal } from "./ui/box-reveal";
import Reading from "@/assets/Reading.png";
import Work from "@/assets/working.png";

export function TracingBeamDemo() {
  return (
    <div className="relative m-5 border bg-white p-2 md:shadow-xl">
      <TracingBeam>
        <div className="relative mx-auto max-w-5xl pt-4 md:max-w-4xl">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="mb-4 justify-center rounded-full bg-black px-4 py-1 text-center text-sm text-white">
                <GradualSpacing
                  className="justify-center text-center align-middle text-2xl font-extralight text-white"
                  text={item.badge}
                />
              </h2>

              <div className="prose prose-sm dark:prose-invert text-sm dark:text-white">
                <BlurIn
                  word={item.description}
                  className="font-normal text-black"
                  variant={{
                    hidden: { filter: "blur(10px)", opacity: 0 },
                    visible: { filter: "blur(0px)", opacity: 1 },
                  }}
                  duration={2}
                />
              </div>
              {/* handle the image here  */}
              {item.image && item.section && item.className && (
                <div
                  className={`${item.className} flex items-center justify-between pt-2`}
                >
                  <img
                    src={item.image}
                    alt="SORRY NOT ABLE TO LOAD THE IMAGE HERE"
                    className="h-96 w-2/3 rounded-lg border-4 border-transparent object-cover"
                  />

                  <div>
                    {item.section.map((sectionItem, idx) => (
                      <div key={idx}>
                        <h3 className="inline-block text-lg font-semibold">
                          {sectionItem.title}
                        </h3>
                        <span className="ml-2 text-sm text-gray-500">
                          (recently)
                        </span>
                        <p className="text-sm text-gray-600">
                          {sectionItem.place}
                        </p>
                        <p className="text-xs text-gray-500">
                          {sectionItem.date}
                        </p>
                        <p className="mt-2 text-sm">
                          {sectionItem.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* <>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="text-[3.5rem] font-semibold">
                    Magic UI<span className="text-[#5046e6]">.</span>
                  </p>
                </BoxReveal>

                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <h2 className="mt-[.5rem] text-[1rem]">
                    UI library for{" "}
                    <span className="text-[#5046e6]">Design Engineers</span>
                  </h2>
                </BoxReveal>

                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <div className="mt-6">
                    <p>
                      -&gt; 20+ free and open-source animated components built
                      with
                      <span className="font-semibold text-[#5046e6]">
                        {" "}
                        React
                      </span>
                      ,
                      <span className="font-semibold text-[#5046e6]">
                        {" "}
                        Typescript
                      </span>
                      ,
                      <span className="font-semibold text-[#5046e6]">
                        {" "}
                        Tailwind CSS
                      </span>
                      , and
                      <span className="font-semibold text-[#5046e6]">
                        {" "}
                        Framer Motion
                      </span>
                      . <br />
                      -&gt; 100% open-source, and customizable. <br />
                    </p>
                  </div>
                </BoxReveal>
              </> */}
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
    image: Reading,
    className: "sm:flex-row flex-col-reverse",
    section: [
      {
        place: "KLE Socity degree college",
        score: "8.1 CGPA",
        title: "Bachelor of Computer Application",
        date: "2019 - 2023",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.",
      },
    ],
  },
  {
    title: "Work",
    description:
      " In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse veniam fugiat esse qui sint ad sunt reprehenderit do qui proidentreprehenderit. Laborum exercitation aliqua reprehencillum ut mollit.",

    badge: "Work",
    image: Work,
    className: "sm:flex-row-reverse pt-5 flex-col-reverse ",
    section: [
      {
        place: "Inventys Pvt Ltd",
        title: "Junior Software Developer",
        date: "2023 - currently working",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.",
      },
    ],
  },
];

export default TracingBeamDemo;
