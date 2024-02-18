"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
      id: 1,
      title: "Social Media Application",
      image: "/images/projects/1.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/V415hT313/ReactSocialMedia",
      previewUrl: "https://react-social-media-sable.vercel.app/",
    },
    {
      id: 2,
      title: "E-commerce Website",
      image: "/images/projects/2.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/V415hT313/ecommerce",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Dalle-Clone",
      image: "/images/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/V415hT313/Dalle-Clone",
      previewUrl: "/",
    },
   
    {
      id: 4,
      title: "Olympics-Survey",
      image: "/images/projects/4.jpg",
      tag: ["All", "ML"],
      gitUrl: "https://github.com/V415hT313/OlympicsMain",
      previewUrl: "https://olympicsmain-gvz57fgjzrivyey2hp7e5i.streamlit.app/",
    },
    {
      id: 5,
      title: "Potato-Disease Classification",
      image: "/images/projects/5.jpg",
      tag: ["All", "ML"],
      gitUrl: "https://github.com/V415hT313/DeepLearningProject",
      previewUrl: "/",
    },
    {
        id: 6,
        title: "Car Price Prediction",
        image: "/images/projects/6.jpg",
        tag: ["All", "ML"],
        gitUrl: "/",
        previewUrl: "https://github.com/V415hT313/CarPRice",
    },
    {
        id: 7,
        title: "Water Quality Prediction",
        image: "/images/projects/7.jpg",
        tag: ["All", "ML"],
        gitUrl: "https://github.com/V415hT313/Quality_Prediction",
        previewUrl: "/",
    },
    {
      id: 8,
      title: "FigPro",
      image: "/images/projects/8.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/V415hT313/figma_clone",
      previewUrl: "https://figma-clone-theta.vercel.app/",
    },
    {
      id: 9,
      title: "SignToText",
      image: "/images/projects/9.png",
      tag: ["All", "ML"],
      gitUrl: "https://github.com/V415hT313/ASL_TText",
      previewUrl: "https://github.com/V415hT313/ASL_TText/blob/main/20240218-0805-23.4093692.mp4",
    },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
    <section>
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
          name="ML"
          isSelected={tag === "ML"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}

      </ul>
                    
    </section>
  );
};

export default ProjectsSection;
