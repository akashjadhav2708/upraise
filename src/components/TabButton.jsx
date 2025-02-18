import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

// Add PropTypes for prop validation
TabButton.propTypes = {
  active: PropTypes.bool.isRequired, // `active` should be a boolean
  selectTab: PropTypes.func.isRequired, // `selectTab` should be a function
  children: PropTypes.node.isRequired, // `children` can be any renderable content
};

export default TabButton;
