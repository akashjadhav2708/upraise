"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  const handleDownloadBrochure = () => {
    if (typeof window !== "undefined") {
      const link = document.createElement("a");
      link.href = "/Uprise_Education_Brochure.pdf"; // Ensure the file is in the public folder
      link.download = "Uprise_Education_Brochure.pdf"; // Set the correct file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-6 pt-[80px] bg-gray-100">
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-12 items-center gap-8">
        {/* Left Side - Text Content */}
        <div className="col-span-8 text-center sm:text-left">
          <h1 className="text-blue-600 mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Welcome to
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Uprise Education",
                2000,
                "Career Guidance Experts",
                2000,
                "Your Future Starts Here",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-blue-500 text-lg sm:text-xl mb-6">
            Empowering students and parents with expert career guidance, tailored
            solutions, and comprehensive support to achieve success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#services"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-lg hover:opacity-80 transition"
            >
              Explore Services
            </Link>
            <button
              onClick={handleDownloadBrochure}
              className="px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-700 hover:text-white font-semibold transition"
            >
              Download Brochure
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="col-span-4 flex justify-center sm:justify-end mt-6 sm:mt-0 relative">
          <div className="relative w-full max-w-[400px] flex justify-center">
            {/* Founder Image */}
            <Image
              src="/images/founder-siddharth.png"
              alt="Founder of Uprise Education"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full max-w-6xl mt-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Book Your Free Career Consultation</h2>
        <p className="text-lg mb-6">Take the first step towards your bright future with our expert guidance.</p>
        <Link
          href="/contact"
          className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:opacity-90 transition"
        >
          Book Now
        </Link>
      </div>

      {/* Statistics Section */}
      <div className="w-full max-w-6xl mt-12 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-blue-600 text-3xl font-bold mb-4 text-center">Our Achievements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-blue-600 text-4xl font-extrabold">1,000+</h3>
            <p className="text-blue-500">Students Guided</p>
          </div>
          <div>
            <h3 className="text-blue-600 text-4xl font-extrabold">95%</h3>
            <p className="text-blue-500">Satisfaction Rate</p>
          </div>
          <div>
            <h3 className="text-blue-600 text-4xl font-extrabold">50+</h3>
            <p className="text-blue-500">Partnered Schools</p>
          </div>
          <div>
            <h3 className="text-blue-600 text-4xl font-extrabold">4+</h3>
            <p className="text-blue-500">Years of Experience</p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="w-full max-w-6xl mt-12 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-blue-600 text-3xl font-bold mb-4 text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-blue-500 text-xl font-semibold mb-2">
              Unique Solutions
            </h3>
            <p className="text-gray-600">
              Providing innovative and tailored guidance that sets every student apart.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-blue-500 text-xl font-semibold mb-2">
              Passion for Growth
            </h3>
            <p className="text-gray-600">
              Driven by a commitment to nurture and inspire students to achieve their full potential.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-blue-500 text-xl font-semibold mb-2">
              Respect for Individuality
            </h3>
            <p className="text-gray-600">
              Honoring each student’s unique dreams, talents, and circumstances
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
