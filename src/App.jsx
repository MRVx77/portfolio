import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import ContactMe from "./components/ContactMe";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Project />
      <ContactMe />
    </div>
  );
};

export default App;
