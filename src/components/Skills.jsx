import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaNode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFigma,
  SiPostman,
  SiNextdotjs,
} from "react-icons/si";

const Skills = ({ isDark }) => {
  const skills = [
    {
      category: "Frontend",
      categoryColor: "from-cyan-500 to-blue-500",
      categoryBg: "bg-cyan-500/20",
      items: [
        { name: "React", icon: <FaReact />, color: "text-cyan-400" },
        { name: "React JS", icon: <FaReact />, color: "text-cyan-400" },
        { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-400" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
        { name: "Next JS", icon: <SiNextdotjs />, color: isDark ? "text-white" : "text-slate-900" },
      ],
    },
    {
      category: "Backend",
      categoryColor: "from-green-500 to-emerald-500",
      categoryBg: "bg-green-500/20",
      items: [
        { name: "Node", icon: <FaNode />, color: "text-green-400" },
        { name: "Node JS", icon: <FaNode />, color: "text-green-400" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
        {
          name: "Express",
          icon: <span className="font-bold text-lg">Ex</span>,
          color: isDark ? "text-white" : "text-slate-900",
        },
      ],
    },
    {
      category: "Tools",
      categoryColor: "from-purple-500 to-pink-500",
      categoryBg: "bg-purple-500/20",
      items: [
        { name: "Git / GitHub", icon: <FaGitAlt />, color: isDark ? "text-white" : "text-slate-900" },
        { name: "Figma", icon: <SiFigma />, color: "text-purple-400" },
        { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-24 px-6 scroll-mt-20 transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-br from-white via-slate-50 to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
            Skills &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className={`text-lg transition-colors duration-500 ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}>
            Technologies and tools I work with to build amazing digital experiences
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillSection, index) => (
            <div
              key={index}
              className={`group rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                isDark
                  ? "bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-slate-600"
                  : "bg-gradient-to-br from-white to-slate-50 border-slate-200 hover:border-slate-300"
              }`}
            >
              {/* Category Header */}
              <div className="mb-8">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${skillSection.categoryColor} bg-clip-text text-transparent`}>
                  {skillSection.category}
                </h3>
                <div className={`h-1 w-12 ${skillSection.categoryBg} rounded-full mt-2`}></div>
              </div>

              {/* Skills Grid */}
              <div className="space-y-3">
                {skillSection.items.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer group/item hover:scale-105 ${
                      isDark
                        ? "bg-slate-700/50 hover:bg-slate-600/70"
                        : "bg-slate-100/50 hover:bg-slate-200/70"
                    }`}
                  >
                    {/* Icon */}
                    <span className={`text-2xl ${item.color} group-hover/item:scale-125 transition-transform`}>
                      {item.icon}
                    </span>

                    {/* Skill Name */}
                    <span className={`font-semibold transition-colors ${
                      isDark
                        ? "text-slate-200 group-hover/item:text-white"
                        : "text-slate-700 group-hover/item:text-slate-900"
                    }`}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "20+", label: "Projects", gradient: "from-cyan-400 to-blue-500" },
            { value: "15+", label: "Technologies", gradient: "from-green-400 to-emerald-500" },
            { value: "100%", label: "Commitment", gradient: "from-purple-400 to-pink-500" },
            { value: "5+", label: "Years", gradient: "from-orange-400 to-red-500" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl border transition-all duration-300 ${
                isDark
                  ? "bg-slate-800/50 border-slate-700"
                  : "bg-slate-100/50 border-slate-200"
              }`}
            >
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <p className={`mt-2 transition-colors duration-500 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;