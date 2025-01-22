import React from "react";
import { Card, Tooltip, Tag } from "antd";
import { FaReact } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "tailwindcss/tailwind.css";
import WB from "./assets/mobileapp5.jpg"

// Initialize AOS
AOS.init();

const projects = [
  {
    title: "Wings Blast",
    description: "eCommerce platform providing seamless shopping experience.",
    image: WB,
    aosEffect: "fade-up",
    category: "eCommerce",
    language: ["React JS", "Tailwind CSS", "Node JS", "MySQL"],
  },
  {
    title: "Lamyakun",
    description: "A modern website built for educational institutions.",
    image: WB,
    aosEffect: "fade-up",
    category: "Web Development",
    language: ["React JS", "Tailwind CSS", "Node JS", "MySQL"],
  },
  {
    title: "Custom Software",
    description: "Tailored software solutions for business growth.",
    image: WB,
    aosEffect: "fade-up",
    category: "Software Development",
    language: ["React JS", "Tailwind CSS", "Node JS", "MySQL"],
  },
  {
    title: "TechVerse",
    description: "A community-driven technology blog.",
    image: WB,
    aosEffect: "fade-right",
    category: "Blog Development",
    language: ["Next.js", "Chakra UI", "TypeScript"],
  },
  {
    title: "FitLife",
    description: "A fitness tracking app for healthier living.",
    image: WB,
    aosEffect: "fade-left",
    category: "Health & Fitness",
    language: ["React Native", "Expo", "MongoDB"],
  },
  {
    title: "Portfolio Pro",
    description: "An elegant portfolio website for creative professionals.",
    image: WB,
    aosEffect: "zoom-in",
    category: "Portfolio",
    language: ["React JS", "Framer Motion", "SASS"],
  },
];


const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project, index) => (
        <div
          key={index}
          data-aos={project.aosEffect}
          className="shadow-lg rounded-lg overflow-hidden bg-white"
        >
          <Card
            cover={
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            }
            className="border-0"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800">
                {project.title}
              </h2>
              <Tooltip title={`${project.category} Project`}>
                <FaReact className="text-blue-500 text-xl" />
              </Tooltip>
            </div>

            <p className="text-gray-600 mb-2">{project.description}</p>

            <div className="mb-4">
              <span className="text-sm font-medium text-gray-700">Category: </span>
              <Tag color="blue">{project.category}</Tag>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-700">
                Languages:
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.language.map((lang, i) => (
                  <Tag key={i} color="green">
                    {lang}
                  </Tag>
                ))}
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
