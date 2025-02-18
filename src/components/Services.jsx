import React from "react";

const SERVICES_DATA = [
  {
    title: "Career Guidance",
    items: [
      "Aptitude Tests and Psychometric Assessments",
      "1:1 Career Counseling Sessions",
      "Career Planning and Roadmaps",
      "Stream and Branch Selection",
      "Career Workshops and Awareness Campaigns",
    ],
  },
  {
    title: "Education Guidance",
    items: [
      "School and Board Selection",
      "Subject Selection Guidance",
      "College Selection Assistance",
      "Competitive Exam Preparation Guidance",
      "Admission Support",
    ],
  },
  {
    title: "Study Abroad Consultancy",
    items: [
      "Guidance on Choosing International Universities",
      "Application Process Assistance",
      "Visa Process Support",
      "Preparation for Overseas Education",
    ],
  },
  {
    title: "Workshops",
    items: [
      "Interactive Career Workshops",
      "Skill Development Programs",
      "Aptitude and Interest Development",
      "Parent and Student Awareness Campaigns",
    ],
  },
  {
    title: "Ongoing Support",
    items: [
      "Continuous Guidance at Every Stage",
      "Support During Critical Milestones",
      "Help with Entrance Tests and College Admissions",
      "Profile Building for Future Opportunities",
    ],
  },
  {
    title: "Skill Development",
    items: [
      "Communication and Soft Skills Training",
      "Interview Preparation Guidance",
      "Teamwork and Leadership Development",
      "Time Management and Productivity Skills",
    ],
  },
  {
    title: "Mentorship Programs",
    items: [
      "Guidance from Industry Experts",
      "Access to Alumni Networks",
      "Regular Progress Check-ins",
      "Goal Setting and Achieving Strategies",
    ],
  },
];

const Services = () => {
  return (
    <section className="w-full bg-gray-100 text-gray-700 py-16 px-6" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          Our Services
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
          At Uprise Education, we offer a range of personalized services to empower students and parents to make informed career decisions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">{service.title}</h3>
              <ul className="list-disc pl-4 text-gray-700">
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
