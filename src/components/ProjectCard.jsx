import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div className="text-blue-600 rounded-b-xl mt-3 bg-white py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-blue-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
