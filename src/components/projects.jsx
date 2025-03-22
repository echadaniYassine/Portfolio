import React, { useState } from "react";

const Projects = () => {
  const ProjectsData = [
    {
      id: 1,
      img: "assets/asianTaste.png",
      title: "Asian Taste",
      description: "This is the description for Project One, showcasing its features and technologies used.",
      liveLink: "https://asian-taste-one.vercel.app/",
    },
    {
      id: 2,
      img: "assets/trendify.png",
      title: "Trendify Store",
      description: "Description for Project Two, focusing on solving a specific problem.",
      liveLink: "https://trendify-frontend-nine.vercel.app/",
    },
    {
      id: 3,
      img: "assets/okyWebcraft.png",
      title: "Oky-webcraft",
      description: "Project Three is a tool designed to improve user productivity.",
      liveLink: "https://oky-webcraft.vercel.app/",
    },
    {
      id: 4,
      img: "assets/okyWebcraft.png",
      title: "BloodDonation",
      description: "Coming soon.",
      liveLink: "https://oky-webcraft.vercel.app/",
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(3);
  const [showAll, setShowAll] = useState(false);

  const handleToggleView = () => {
    setShowAll(!showAll);
    setVisibleProjects(showAll ? 3 : ProjectsData.length);
  };

  return (
    <section id="realisation" className="py-16 px-6 max-w-7xl mx-auto text-center bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-800 mb-12 relative inline-block">
        Featured Projects
        <span className="block w-16 h-1 bg-orange-500 rounded-full mx-auto mt-2"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {ProjectsData.slice(0, visibleProjects).map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg p-5 transition-all transform hover:-translate-y-3 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-3">{project.title}</h3>

            <img
              className="w-full h-48 object-cover rounded-md mb-4"
              src={project.img}
              alt={`${project.title} screenshot`}
            />

            <p className="text-gray-600 text-sm mb-4">{project.description}</p>

            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 text-white px-4 py-2 rounded-md font-semibold transition-all hover:bg-orange-600"
            >
              Live Demo
            </a>
          </div>
        ))}
      </div>

      <button
        className="mt-10 bg-orange-500 text-white px-6 py-2 rounded-md text-lg font-semibold transition-all hover:bg-orange-600"
        onClick={handleToggleView}
      >
        {showAll ? "Show Less" : "Show All Projects"}
      </button>
    </section>
  );
};

export default Projects;
