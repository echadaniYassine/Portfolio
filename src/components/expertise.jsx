import React from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaNodeJs, FaLaravel, FaGitAlt,
  FaShopify, FaWordpress, FaDocker
} from "react-icons/fa";
import { SiMysql, SiMongodb, SiTailwindcss, SiExpress, SiKubernetes, SiFirebase } from "react-icons/si";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "PHP", icon: <FaLaravel /> },
    ]
  },
  {
    category: "Frameworks",
    skills: [
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "ReactJS", icon: <FaReact /> },
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQL", icon: <SiMysql /> },
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> }
    ]
  },
  {
    category: "E-Commerce",
    skills: [
      { name: "Shopify", icon: <FaShopify /> },
      { name: "WordPress", icon: <FaWordpress /> }
    ]
  }
];

export default function Expertise() {
  return (
    <div id="expertise" className="py-12 px-5 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-10 relative inline-block">
        Skills
        <span className="block w-16 h-1 bg-orange-500 rounded-full mx-auto mt-2"></span>
      </h2>

      {skillsData.map((section, index) => (
        <div key={index} className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 uppercase mb-6">{section.category}</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {section.skills.map((skill, idx) => (
              <div key={idx} className="w-32 h-32 flex flex-col items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-2">
                <div className="text-4xl text-orange-500">{skill.icon}</div>
                <p className="text-lg font-semibold text-gray-700 mt-3">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
