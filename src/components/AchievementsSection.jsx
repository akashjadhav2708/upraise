"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const impactList = [
  {
    metric: "Students Guided",
    value: "1000",
    postfix: "+",
  },
  {
    metric: "Schools Partnered",
    value: "50",
    postfix: "+",
  },
  {
    metric: "Client Satisfaction",
    value: "95",
    postfix: "%",
  },
  {
    metric: "Years of Experience",
    value: "4",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 bg-white">
      <div className="sm:border-gray-200 sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between bg-white">
        {impactList.map((impact, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-blue-600 text-4xl font-bold flex flex-row">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(impact.value)}
                  locale="en-US"
                  className="text-blue-600 text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {impact.postfix}
              </h2>
              <p className="text-blue-500 text-base">{impact.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;