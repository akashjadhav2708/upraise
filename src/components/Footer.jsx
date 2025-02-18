"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // LinkedIn and GitHub icons

const Footer = () => {
  return (
    <motion.footer
      className="footer border-t-[#E5E7EB] border-l-transparent border-r-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container p-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Company Details */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold">Uprise Education</h4>
          <p className="text-sm">123 Education Lane</p>
          <p className="text-sm">Pune, Maharashtra, India</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
          <p className="text-sm">Email: info@upriseeducation.com</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transform transition-transform hover:scale-110"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transform transition-transform hover:scale-110"
          >
            <FaGithub size={30} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-white text-center md:text-right">
          &copy; 2025 Uprise Education. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
