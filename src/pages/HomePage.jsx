// import React from "react";
// import Contact from "../components/Contact";
// import Skills from "../components/Skills";
// import Projects from "../components/Projects";

// const HomePage = () => {
//   return (
//     <div className="scroll-smooth overflow-hidden">
//       {/* Hero Section */}
//       <section
//         id="home"
//         className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 pt-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white scroll-mt-20 overflow-hidden"
//       >
//         {/* Animated Background Blobs */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
//         </div>

//         {/* Content Container */}
//         <div className="relative z-10 max-w-4xl mx-auto">
//           {/* Status Badge */}
//           <div className="mb-8 inline-flex items-center justify-center">
//             <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm">
//               <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
//               <span className="text-sm font-semibold tracking-widest text-slate-300 uppercase">
//                 Open to Work
//               </span>
//             </div>
//           </div>

//           {/* Main Heading */}
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight opacity-0 animate-fadeUp">
//             Hi, I&apos;m{" "}
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Rishabh Garg
//             </span>
//           </h1>

//           {/* Subheading */}
//           <p className="text-xl md:text-2xl font-semibold text-slate-300 opacity-0 animate-fadeUp delay-200 mb-6">
//             Frontend Developer crafting{" "}
//             <span className="text-white font-bold">pixel-perfect</span>,
//             intuitive, and performant web experiences.
//           </p>

//           {/* Description */}
//           <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed opacity-0 animate-fadeUp delay-400 mb-12">
//             I transform ideas into beautiful, functional digital products. With
//             expertise in React, modern CSS, and user-centric design, I build
//             applications that not only look great but deliver exceptional user
//             experiences.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fadeUp delay-600">
//             <a
//               href="#projects"
//               onClick={(e) => {
//                 e.preventDefault();
//                 document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
//               }}
//               className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer"
//             >
//               View My Work{" "}
//               <span className="text-xl">↓</span>
//             </a>

//             <a
//               href="#contact"
//               onClick={(e) => {
//                 e.preventDefault();
//                 document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
//               }}
//               className="px-8 py-4 bg-transparent border-2 border-slate-600 text-white font-bold rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105 cursor-pointer"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-2 transform -translate-x-1/2 opacity-0 animate-fadeUp delay-600">
//           <div className="flex flex-col items-center gap-2">
//             <p className="text-sm text-slate-400">Scroll to explore</p>
//             <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
//               <div className="w-1 h-2 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Other Sections */}
//       <Projects />
//       <Skills />
//       <Contact />
//     </div>
//   );
// };

// export default HomePage;



import React, { useState, useEffect } from "react";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [isDark, setIsDark] = useState(() => {
    // Initialize from localStorage or system preference
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  // Only update DOM when isDark changes (separate effect)
  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]); // Dependency array prevents cascading renders

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className={`scroll-smooth overflow-hidden ${isDark ? "bg-slate-950" : "bg-white"}`}>
      {/* Navbar */}
      <Navbar isDark={isDark} onThemeToggle={toggleTheme} />

      {/* Hero Section */}
      <section
        id="home"
        className={`relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 pt-20 scroll-mt-20 overflow-hidden transition-all duration-500 ${
          isDark
            ? "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white"
            : "bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 text-slate-900"
        }`}
      >

        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl transition-colors duration-500 ${
              isDark ? "bg-blue-500/10" : "bg-blue-400/5"
            }`}
          ></div>
          <div
            className={`absolute bottom-20 left-20 w-72 h-72 rounded-full blur-3xl transition-colors duration-500 ${
              isDark ? "bg-cyan-500/10" : "bg-cyan-400/5"
            }`}
          ></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="mb-8 inline-flex items-center justify-center">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-500 ${
                isDark
                  ? "border-slate-700 bg-slate-900/50"
                  : "border-slate-300 bg-slate-100/50"
              } backdrop-blur-sm`}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span
                className={`text-sm font-semibold tracking-widest uppercase transition-colors duration-500 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Open to Work
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight opacity-0 animate-fadeUp">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Rishabh Garg
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-xl md:text-2xl font-semibold opacity-0 animate-fadeUp delay-200 mb-6 transition-colors duration-500 ${
              isDark ? "text-slate-300" : "text-slate-700"
            }`}
          >
            Frontend Developer crafting{" "}
            <span className={isDark ? "text-white" : "text-slate-900"}>
              pixel-perfect
            </span>
            , intuitive, and performant web experiences.
          </p>

          {/* Description */}
          <p
            className={`max-w-3xl mx-auto text-lg md:text-xl leading-relaxed opacity-0 animate-fadeUp delay-400 mb-12 transition-colors duration-500 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I transform ideas into beautiful, functional digital products. With
            expertise in React, modern CSS, and user-centric design, I build
            applications that not only look great but deliver exceptional user
            experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fadeUp delay-600">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`px-8 py-4 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer ${
                isDark
                  ? "bg-white text-slate-900 hover:bg-cyan-400 hover:shadow-cyan-500/20"
                  : "bg-slate-900 text-white hover:bg-cyan-600 hover:shadow-cyan-600/20"
              }`}
            >
              View My Work <span className="text-xl">↓</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`px-8 py-4 font-bold rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                isDark
                  ? "bg-transparent border-2 border-slate-600 text-white hover:border-cyan-400 hover:text-cyan-400"
                  : "bg-transparent border-2 border-slate-400 text-slate-900 hover:border-cyan-600 hover:text-cyan-600"
              }`}
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2 transform -translate-x-1/2 opacity-0 animate-fadeUp delay-600">
          <div className="flex flex-col items-center gap-2">
            <p
              className={`text-sm transition-colors duration-500 ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Scroll to explore
            </p>
            <div
              className={`w-6 h-10 border-2 rounded-full flex justify-center transition-colors duration-500 ${
                isDark ? "border-slate-600" : "border-slate-400"
              }`}
            >
              <div className="w-1 h-2 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections - All receiving isDark prop */}
      <Projects isDark={isDark} />
      <Skills isDark={isDark} />
      <Contact isDark={isDark} />
    </div>
  );
};

export default HomePage;