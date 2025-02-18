import React from "react"; // Add this if React needs to be in scope
import PropTypes from "prop-types"; // Import PropTypes
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-blue-600 text-lg font-medium rounded md:p-0 hover:bg-blue-700 hover:text-white transition"
    >
      {title}
    </Link>
  );
};

// PropTypes validation
NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavLink;
