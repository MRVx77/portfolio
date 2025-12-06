import React from "react";
import about from "../assets/About.jpg";

function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col lg:flex-row items-center md:items-start gap-10 py-20 px-6 md:px-20 md:gap-16 lg:gap-24 xl:gap-32 lg:px-32 text-white lg:mt-32 mb-32"
    >
      {/* Image */}
      <div className="shrink-0" data-aos="fade-right">
        <img
          className="w-72 lg:w-96 rounded-[150px] shadow-[0_0_30px_7px_rgba(0,212,255,0.7)] transition-shadow duration-500 hover:shadow-[0_0_40px_10px_rgba(0,212,255,1)]"
          src={about}
          alt="About Me"
        />
      </div>

      {/* Text Content + Skills */}
      <div
        className="flex-1 text-center md:text-left"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>

        <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
          Hi, I’m Vansh, a Full Stack Web Developer with a passion for creating
          responsive, user-friendly, and visually engaging web applications...
        </p>

        <h2
          className="text-4xl font-semibold mb-4 mt-10"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Skills
        </h2>

        <ul className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 text-gray-200">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "TailwindCSS",
            "Bootstrap",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgresSQL",
            "Java",
            "REST APIs",
          ].map((skill, index) => (
            <li
              key={skill}
              data-aos="zoom-in-up"
              data-aos-delay={index * 80}
              className="border-2 border-gray-800 text-center px-1 py-1 rounded-2xl 
                         hover:bg-blue-950 hover:scale-105 hover:shadow-[0_0_15px_7px_rgba(0,212,255,0.9)] 
                         transition transform duration-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
