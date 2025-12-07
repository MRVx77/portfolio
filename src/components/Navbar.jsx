import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"; // hamburger menu icon
import logo from "../assets/nav.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMenu(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // 60% of the section must be visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex items-center justify-between px-6 md:px-20 py-2 bg-black fixed top-0 z-50">
      <AnchorLink href="#home">
        <img className="w-28" src={logo} alt="" />
      </AnchorLink>

      {/* Main Menu (Hidden on small screens) */}
      <div className="hidden md:flex gap-8 font-medium text-blue-400">
        <AnchorLink
          href="#home"
          onClick={() => {
            setMenu("home");
          }}
          className={`text-lg hover:border-b-2 hover:scale-110 transition-transform duration-300 ${
            menu === "home" ? "border-b-2" : ""
          }`}
        >
          Home
        </AnchorLink>
        <AnchorLink
          href="#about"
          onClick={() => {
            setMenu("about");
          }}
          className={`text-lg hover:border-b-2 hover:scale-110 transition-transform duration-300 ${
            menu === "about" ? "border-b-2" : ""
          }`}
        >
          About Me
        </AnchorLink>
        <AnchorLink
          href="#projects"
          onClick={() => {
            setMenu("projects");
          }}
          className={`text-lg hover:border-b-2 hover:scale-110 transition-transform duration-300 ${
            menu === "projects" ? "border-b-2" : ""
          }`}
        >
          Projects
        </AnchorLink>
        <AnchorLink
          href="#contact"
          onClick={() => {
            setMenu("contact");
          }}
          className={`text-lg hover:border-b-2 hover:scale-110 transition-transform duration-300 ${
            menu === "contact" ? "border-b-2" : ""
          }`}
        >
          Contact Me
        </AnchorLink>
      </div>

      {/* Icons (Hidden on small screens) */}
      <div className="hidden md:flex gap-4 text-3xl text-white">
        <a
          className="hover:scale-110 transition"
          target="_blank"
          href="https://www.linkedin.com/in/vansh-dakhode-29a27635a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        >
          <FaLinkedin />
        </a>
        <a
          className="hover:scale-110 transition"
          target="_blank"
          href="https://github.com/MRVx77"
        >
          <FaGithub />
        </a>
        <button className="px-4 py-1 ml-3 bg-blue-700 text-[17px] text-white rounded-2xl hidden lg:block border-0 shadow-[0_0_3px_1px_rgba(0,212,255,1)] hover:shadow-[0_0_10px_7px_rgba(0,212,255,1)]">
          <AnchorLink href="#contact">Contact Me</AnchorLink>
        </button>
      </div>

      {/* Hamburger Icon (Visible only on small screens) */}
      <div
        className="md:hidden text-white text-3xl cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <FaBars />
      </div>

      {/* mobile Silde menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-blue-400 z-50 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Close Icon */}
        <div
          className="flex justify-end p-5 text-3xl text-white cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <FaTimes />
        </div>

        {/* Menu Links */}
        <div className="flex flex-col gap-7 text-xl px-6 mt-4">
          {["home", "about", "projects", "contact"].map((item) => (
            <AnchorLink
              key={item}
              href={`#${item}`}
              onClick={() => {
                setMenu(item);
                setOpen(false); // close menu on click
              }}
              className="hover:text-white transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </AnchorLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
