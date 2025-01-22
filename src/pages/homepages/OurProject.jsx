import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Card, Tag, Tooltip } from "antd";
import { FaLaptopCode, FaReact } from "react-icons/fa";
import WB from "../../assets/projectimage.jpg";
import { Link } from "react-router-dom";

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
    aosEffect: "fade-up",
    category: "Blog Development",
    language: ["Next.js", "Chakra UI", "TypeScript"],
  },
  {
    title: "FitLife",
    description: "A fitness tracking app for healthier living.",
    image: WB,
    aosEffect: "fade-up",
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

const OurProject = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // Update the filtered projects based on the selected category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <section className="bg-gray-100 py-16 px-1 sm:px-6 lg:px-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-yellow-600 font-medium text-sm sm:text-base uppercase">
          Awesome Works
        </p>
        <h1
          className="text-3xl sm:text-4xl font-bold text-green-600"
          data-aos="zoom-in-up"
        >
          Our Creative Works
        </h1>
        <p className="text-gray-600 mt-2 sm:text-lg">
          Explore some of our amazing projects tailored to your business needs.
        </p>
        {/* Category Filter */}
        <div
          data-aos="fade-up"
          className="flex justify-center mt-6 space-x-3 overflow-x-auto scrollbar-hide"
        >
          {[
            "All",
            "Web Development",
            "eCommerce",
            "Mobile App",
            "Software Development",
            "Blog Development",
            "Health & Fitness",
            "Portfolio",
          ].map((category, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm sm:text-base rounded-lg transition duration-300 ${
                selectedCategory === category
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-green-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 lg:p-6">
        {filteredProjects.map((project, index) => (
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
                <span className="text-sm font-medium text-gray-700">
                  Category:{" "}
                </span>
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

      {/* See More Button */}
      <div className="flex justify-center mt-12" data-aos="fade-up">
        <Link to="/portfolio">
          <Button
            type="primary"
            size="large"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium shadow-md transition-transform transform hover:scale-105"
          >
            SEE MORE
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default OurProject;
