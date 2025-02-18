"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Career Guidance Platform",
    description: "An interactive platform offering career counseling and aptitude tests to help students discover their true potential.",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 2,
    title: "Study Abroad Consultancy Tool",
    description: "A comprehensive system assisting students in selecting universities, applying for studies abroad, and managing their visa processes.",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 3,
    title: "Skill Development Workshop Tracker",
    description: "A mobile app for tracking, managing, and participating in skill development workshops designed to enhance career readiness.",
    tag: ["All", "Mobile"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 4,
    title: "Interactive Career Dashboard",
    description: "A visually interactive dashboard providing insights into career options, required skills, and job market trends.",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 5,
    title: "Parent-Student Awareness Portal",
    description: "A portal designed to enhance communication and mutual understanding between parents and students regarding career paths.",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "#",
  },
  {
    id: 6,
    title: "Admission Support System",
    description: "A streamlined platform for assisting students through every step of the admission process, from applications to final acceptance.",
    tag: ["All", "Web"],
    gitUrl: "#",
    previewUrl: "#",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="py-16 bg-gray-100 text-gray-700">
      {/* Title with Animation */}
      <motion.h2
        className="text-center text-4xl font-bold text-blue-600 mt-4 mb-8 md:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Works
      </motion.h2>

      {/* Tags with Animated Selection */}
      <div className="flex flex-row justify-center items-center gap-4 py-6">
        {["All", "Web", "Mobile"].map((category) => (
          <motion.button
            key={category}
            onClick={() => setTag(category)}
            className={`px-5 py-2 rounded-full font-semibold transition ${
              tag === category
                ? "bg-blue-600 text-white"
                : "bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Project Cards with Animated Filtering */}
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12 px-4">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="rounded-lg shadow-lg p-5 hover:shadow-2xl transition-transform transform hover:scale-105 bg-white"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  );
};

export default ProjectsSection;
