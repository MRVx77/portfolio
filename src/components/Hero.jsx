import React from "react";
import hero from "../assets/hero.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className=" min-h-screen flex flex-col md:flex-row justify-between items-center text-white py-20 px-11 sm:px-20 md:px-20 lg:px-32 xl:px-64 gap-12 lg:mt-10"
    >
      <img
        data-aos="zoom-in"
        data-aos-delay="200"
        className="w-72 md:w-96 rounded-full shadow-lg order-first md:order-last"
        src={hero}
        alt="Hero Image"
      />

      <div
        data-aos="fade-right"
        data-aos-delay="400"
        className="max-w-xl md:text-left"
      >
        <p className="text-md sm:text-lg mb-2">Hello, I am</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Vansh</h1>
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
          Full-Stack Web Developer
        </h2>
        <p className="text-gray-300 text-lg mb-14">
          I build high-performance web applications with modern and scalable
          technologies.
        </p>

        <a
          target="_blank"
          href="/Vansh_resume.pdf"
          download="Vansh_resume.pdf"
          className="bg-gray-800 border-2 border-blue-500 px-5 sm:px-7 py-3 sm:py-4 mt-12 rounded-2xl text-base sm:text-lg cursor-pointer hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_3px_rgba(0,212,255,0.7)] hover:shadow-[0_0_10px_5px_rgba(0,212,255,1)] lg:mt-10"
        >
          Download Resume/CV
        </a>

        <div className="flex gap-8 text-white text-4xl mt-7 px-3 lg:mt-10">
          <a
            className="hover:scale-150 transition-transform duration-300"
            target="_blank"
            href="https://www.linkedin.com/in/vansh-dakhode-29a27635a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <FaLinkedin data-aos="zoom-in" data-aos-delay="600" />
          </a>
          <a
            className="hover:scale-150 transition-transform duration-300"
            target="_blank"
            href="https://github.com/MRVx77"
          >
            <FaGithub data-aos="zoom-in" data-aos-delay="600" />
          </a>
          <a
            className="hover:scale-150 transition-transform duration-300"
            target="_blank"
            href="https://wa.me/917620339526"
          >
            <FaWhatsapp data-aos="zoom-in" data-aos-delay="600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
