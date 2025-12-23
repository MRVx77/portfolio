import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projects = [
  {
    title: "E-commerce website with admin pannel",
    description:
      "Full-stack e-commerce app with Node.js, Express, MongoDB. with admin panel and Authentication",
    image: project1,
    github: "https://github.com/MRVx77/ecommerce-app.git",
    live: "https://ecommerce-app-frontend-mauve.vercel.app/",
  },
  {
    title: "Web-series Tracker",
    description:
      "A web-series tracker that help you to track the series you watched in watchlist.",
    image: project2,
    github: "https://github.com/MRVx77/ecommerce-app.git",
    live: "https://web-series-anime-tracker.onrender.com",
  },
  {
    title: "AI Career Skill Recommendation Platform",
    description:
      "Solved career planning challenges by providing personalized career paths and skill roadmaps based on user skills and interests.",
    image: project3,
    github:
      "https://github.com/MRVx77/ai-career-skill-recommendation-platform.git",
    live: "https://ai-career-skill-recommendation-platform-5mkhdjtvy.vercel.app/dashboard",
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="py-20 mb-32 px-6 md:px-20 lg:px-32 text-white"
    >
      <h1 data-aos="fade-down" className="text-5xl font-bold mb-3 text-center">
        Projects
      </h1>
      <p className="text-lg text-center mb-20">
        These are some of my projects that I have built.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-9 lg:gap-14">
        {projects.map((project, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={index * 200}
            key={index}
            className="bg-gray-800 mb-5 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.7)] hover:scale-105 transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
