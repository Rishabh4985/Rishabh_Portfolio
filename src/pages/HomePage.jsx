import React from "react";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const HomePage = () => {
  return (
    <div>
      <section
        id="home"
        className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 text-white scroll-mt-20"
      >
        <h1 className="text-5xl font-bold">Welcome to My Portfolio 🚀</h1>
      </section>
      <Navbar />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default HomePage;
