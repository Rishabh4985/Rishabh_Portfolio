import React from "react";
import Card from "../components/Card";

const ProjectsPage = () => {
  const project = [
    {
      img: "https://via.placeholder.com/150",
      title: "Web Development",
      name: "Project 1",
      desc: "This is project 1",
      link: "https://www.project1.com",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Mobile App",
      name: "Project 2",
      desc: "This is project 2",
      link: "https://www.project2.com",
    },

      {
      img: "https://via.placeholder.com/150",
      title: "Mobile App",
      name: "Project 3",
      desc: "This is project 3",
      link: "https://www.project2.com",
    },

      {
      img: "https://via.placeholder.com/150",
      title: "Mobile App",
      name: "Project 4",
      desc: "This is project 4",
      link: "https://www.project2.com",
    },

      {
      img: "https://via.placeholder.com/150",
      title: "Mobile App",
      name: "Project 5",
      desc: "This is project 5",
      link: "https://www.project2.com",
    },

      {
      img: "https://via.placeholder.com/150",
      title: "Mobile App",
      name: "Project 6",
      desc: "This is project 6",
      link: "https://www.project2.com",
    },


  ];

  return (
    <div className="pt-24 px-6 pb-24">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {project.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
