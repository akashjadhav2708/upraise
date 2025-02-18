"use client";

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const EmailSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone_number: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sheetDBUrl = "https://sheetdb.io/api/v1/bxau56vh0gpnp";

    setLoading(true);
    try {
      await axios.post(sheetDBUrl, { data: [formData] });

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        phone_number: "",
      });
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Failed to submit the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto p-8 bg-white text-blue-600 rounded-2xl shadow-lg flex flex-col md:flex-row"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-6 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
        <p className="text-center text-lg">
          Have questions or need guidance? Fill out the form, and we’ll get
          back to you shortly!
        </p>
        <div className="flex space-x-6 justify-center">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-semibold mb-4 text-center">Contact Form</h3>
        {submitted && (
          <motion.p
            className="text-green-600 text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            ✅ Your message has been sent successfully!
          </motion.p>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 bg-gray-100 text-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 bg-gray-100 text-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="p-3 bg-gray-100 text-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 bg-gray-100 text-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
            rows="4"
          />
          <input
            type="text"
            name="phone_number"
            placeholder="Enter your phone number"
            value={formData.phone_number}
            onChange={handleChange}
            required
            className="p-3 bg-gray-100 text-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <motion.button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 text-white font-semibold p-3 rounded-lg transition-all flex items-center justify-center"
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default EmailSection;
