import React from "react";
import Card from "../components/Card";
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
  SiWordpress,
  SiPostman,
  SiNextdotjs,
} from "react-icons/si";

const SkillsPage = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React JS", icon: <FaReact /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "WordPress", icon: <SiWordpress /> },
        { name: "Next JS", icon: <SiNextdotjs /> },
      ],
    },
    {
      category: "Backend & Database",
      items: [
        { name: "Node JS", icon: <FaNode /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        {
          name: "Express JS",
          icon: <span className="font-bold text-lg">Ex</span>,
        },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git / GitHub", icon: <FaGitAlt /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Figma", icon: <SiFigma /> },
      ],
    },
  ];

  return (
    <div className="pt-24 px-6 pb-24 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Skills & Expertise
      </h2>

      {/* Skill Categories */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillSection, index) => (
          <Card key={index}>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              {skillSection.category}
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {skillSection.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg 
                  hover:bg-blue-600 hover:text-white transition cursor-pointer shadow-sm"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
