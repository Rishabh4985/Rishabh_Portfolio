// import React from "react";

// import Contact from "../components/Contact";
// import Skills from "../components/Skills";
// import Projects from "../components/Projects";

// const HomePage = () => {
//   return (
//     <div className="scroll-smooth">
//       <section
//         id="home"
//         className="min-h-screen flex flex-col justify-center items-center text-center px-6
//         bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white scroll-mt-28"
//       >
//         <h1 className="text-4xl md:text-6xl font-bold mb-4 
//         opacity-0 animate-fadeUp">
//           Hi, I’m <span className="text-yellow-300">Rishabh Garg</span>
//         </h1>

//         <p className="text-xl md:text-2xl font-semibold text-gray-200
//         opacity-0 animate-fadeUp delay-200 mb-6">
//           Frontend Developer | React.js | UI/UX
//         </p>

//         <p className="max-w-2xl text-lg md:text-xl text-gray-200 leading-relaxed
//         opacity-0 animate-fadeUp delay-400 mb-10">
//           I craft sleek, responsive and user-friendly web experiences using
//           modern technologies. Building digital products that users love ✨
//         </p>

//         <div className="flex gap-4 opacity-0 animate-fadeUp delay-600">
//           <a
//             href="#projects"
//             className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:scale-105 transition"
//           >
//             View My Work
//           </a>

//           <a
//             href="#contact"
//             className="px-6 py-3 bg-transparent border border-white font-semibold rounded-lg
//             hover:bg-white hover:text-blue-700 transition"
//           >
//             Hire Me
//           </a>
//         </div>
//       </section>

//       <Projects />
//       <Skills />
//       <Contact />
//     </div>
//   );
// };

// export default HomePage;


// import React from "react";

// import Contact from "../components/Contact";
// import Skills from "../components/Skills";
// import Projects from "../components/Projects";

// const HomePage = () => {
//   return (
//     <div className="scroll-smooth overflow-hidden">
//       <style>{`
//         /* Hide scrollbar for all browsers */
//         html {
//           scrollbar-width: none; /* Firefox */
//         }
//         html::-webkit-scrollbar {
//           display: none; /* Chrome, Safari */
//         }
//         body {
//           -ms-overflow-style: none; /* Internet Explorer and Edge */
//         }
//       `}</style>

//       <section
//         id="home"
//         className="min-h-screen flex flex-col justify-center items-center text-center px-6
//         bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white scroll-mt-28"
//       >
//         <h1 className="text-4xl md:text-6xl font-bold mb-4 
//         opacity-0 animate-fadeUp">
//           Hi, I'm <span className="text-yellow-300">Rishabh Garg</span>
//         </h1>

//         <p className="text-xl md:text-2xl font-semibold text-gray-200
//         opacity-0 animate-fadeUp delay-200 mb-6">
//           Frontend Developer | React.js | UI/UX
//         </p>

//         <p className="max-w-2xl text-lg md:text-xl text-gray-200 leading-relaxed
//         opacity-0 animate-fadeUp delay-400 mb-10">
//           I craft sleek, responsive and user-friendly web experiences using
//           modern technologies. Building digital products that users love ✨
//         </p>

//         <div className="flex gap-4 opacity-0 animate-fadeUp delay-600">
//           <a
//             href="#projects"
//             className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:scale-105 transition"
//           >
//             View My Work
//           </a>

//           <a
//             href="#contact"
//             className="px-6 py-3 bg-transparent border border-white font-semibold rounded-lg
//             hover:bg-white hover:text-blue-700 transition"
//           >
//             Hire Me
//           </a>
//         </div>
//       </section>

//       <Projects />
//       <Skills />
//       <Contact />
//     </div>
//   );
// };

// export default HomePage;


import React from "react";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const HomePage = () => {
  return (
    <div className="scroll-smooth overflow-hidden">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 pt-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white scroll-mt-20 overflow-hidden"
      >
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="mb-8 inline-flex items-center justify-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm font-semibold tracking-widest text-slate-300 uppercase">
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
          <p className="text-xl md:text-2xl font-semibold text-slate-300 opacity-0 animate-fadeUp delay-200 mb-6">
            Frontend Developer crafting{" "}
            <span className="text-white font-bold">pixel-perfect</span>,
            intuitive, and performant web experiences.
          </p>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed opacity-0 animate-fadeUp delay-400 mb-12">
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
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              View My Work{" "}
              <span className="text-xl">↓</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-transparent border-2 border-slate-600 text-white font-bold rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fadeUp delay-600">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-slate-400">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default HomePage;
