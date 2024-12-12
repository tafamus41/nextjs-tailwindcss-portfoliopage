"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
// import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "NBA Legends Website",
    description: "Project-1 description",
    image: "/project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tafamus41/NBAlegends",
    previewUrl: "https://tafamus41-nba-legends.vercel.app/",
  },
  {
    id: 2,
    title: "Hospital Appointment Website",
    description: "Project-2 description",
    image: "/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tafamus41/Appointment_App",
    previewUrl: "https://sosa-library-app.vercel.app/",
  },
  {
    id: 3,
    title: "Forum Website",
    description: "Project-3 description",
    image: "/project3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tafamus41/questions-answers",
    previewUrl: "https://tafamus41-questions-answers.vercel.app/",
  },
  {
    id: 4,
    title: "Library Website",
    description: "Project-4 description",
    image: "/project4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tafamus41/library-app",
    previewUrl: "https://sosa-library-app.vercel.app/",
  },
  {
    id: 5,
    title: "Shopping Website",
    description: "Project-5 description",
    image: "/project5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tafamus41/tafamus41-shopping",
    previewUrl: "https://tafamus41-shopping.vercel.app/",
  },
  {
    id: 6,
    title: "Todo List Website",
    description: "Project-6 description",
    image: "/project6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tafamus41/todo-app",
    previewUrl: "https://tafamus41-todo-app.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          // <motion.li
          //   key={index}
          //   variants={cardVariants}
          //   initial="initial"
          //   animate={isInView ? "animate" : "initial"}
          //   transition={{ duration: 0.3, delay: index * 0.4 }}
          // >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          // </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
