"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Mission",
    id: "mission",
    content: (
      <p className="text-blue-600 leading-relaxed">
        Our mission is to empower students with clarity and confidence in their career decisions, bridging the gap between aspirations and opportunities.
      </p>
    ),
  },
  {
    title: "Vision",
    id: "vision",
    content: (
      <p className="text-blue-600 leading-relaxed">
        To become India’s most trusted and innovative career guidance platform, redefining how students and parents approach education, career planning, and life goals.
      </p>
    ),
  },
  {
    title: "Values",
    id: "values",
    content: (
      <ul className="list-disc pl-4 text-blue-600">
        <li>Unique Solutions: Providing innovative and tailored guidance.</li>
        <li>Passion for Growth: Inspiring students to achieve their full potential.</li>
        <li>Respect for Individuality: Honoring unique dreams and talents.</li>
        <li>Integrity and Inclusivity: Fostering a supportive and honest environment.</li>
      </ul>
    ),
  },
  {
    title: "Our Impact",
    id: "impact",
    content: (
      <ul className="list-disc pl-4 text-blue-600">
        <li>1,000+ students guided successfully.</li>
        <li>50+ schools partnered for career workshops.</li>
        <li>95% client satisfaction rate.</li>
        <li>Recognized as a trusted name in career counseling in Pune.</li>
      </ul>
    ),
  },
  {
    title: "Services",
    id: "services",
    content: (
      <ul className="list-disc pl-4 text-blue-600">
        <li>Career Guidance: Aptitude tests, counseling, and career planning.</li>
        <li>Education Guidance: Subject and college selection, competitive exam advice.</li>
        <li>Study Abroad Consultancy: Application assistance, visa process, and more.</li>
        <li>Workshops and Awareness Campaigns: Empowering students and parents with knowledge.</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("mission");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="w-full bg-white text-blue-600 py-16 px-6" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/images/about-image.png"
            width={250}
            height={10}
            alt="Uprise Education"
            className="rounded-lg shadow-2xl transform transition-all hover:scale-110 hover:shadow-2xl duration-300"
          />
        </div>

        {/* Right Side - About Section */}
        <div className="text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">
            About Uprise Education
          </h2>
          <p className="text-lg text-blue-600 leading-relaxed">
            At Uprise Education, we specialize in guiding students and parents through the complexities of career decisions, ensuring informed choices for a brighter future. With over 4 years of expertise and a commitment to empowering students, we provide personalized support and innovative career planning solutions.
          </p>

          {/* Tabs */}
          <div className="flex flex-row gap-4 mt-8 flex-wrap justify-center sm:justify-start scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-blue-100">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
                className="transition-all transform hover:scale-110 hover:shadow-xl shadow-lg p-3 sm:p-4 bg-blue-100 text-blue-600 rounded-xl mb-4 sm:mb-0 duration-300"
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6 p-6 bg-white rounded-lg shadow-2xl">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold text-center text-blue-600 mb-8">
          What Our Clients Say
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-blue-100 rounded-lg shadow-md">
            <p className="text-lg leading-relaxed text-blue-600 italic">
              &quot;Uprise Education gave me clarity on my career path. I feel confident now!&quot;
            </p>
            <h4 className="text-blue-800 font-semibold mt-4">Aditi Sharma</h4>
            <p className="text-blue-500">11th Class Student</p>
          </div>
          <div className="p-6 bg-blue-100 rounded-lg shadow-md">
            <p className="text-lg leading-relaxed text-blue-600 italic">
              &quot;The guidance and workshops were fantastic. Highly recommended!&quot;
            </p>
            <h4 className="text-blue-800 font-semibold mt-4">Priti Kulkarni</h4>
            <p className="text-blue-500">Parent</p>
          </div>
          <div className="p-6 bg-blue-100 rounded-lg shadow-md">
            <p className="text-lg leading-relaxed text-blue-600 italic">
              &quot;The career counseling sessions changed the way I think about my future. Thank you, Uprise Education!&quot;
            </p>
            <h4 className="text-blue-800 font-semibold mt-4">Rajesh Mehta</h4>
            <p className="text-blue-500">Final Year Student</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
