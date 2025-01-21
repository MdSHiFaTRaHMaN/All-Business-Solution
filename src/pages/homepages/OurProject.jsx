import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "antd";
import { FaLaptopCode } from "react-icons/fa";
import WB from "../../assets/projectimage.jpg";

const projects = [
  {
    title: "Wings Blast",
    description: "eCommerce",
    image: WB,
    aosEffect: "fade-up",
    category: "eCommerce",
    language: ["React JS", "Tailwind CSS", "Node JS", "MySQL"],
  },
  {
    title: "Lamyakun",
    description: "Web Development",
    image: WB,
    aosEffect: "fade-up",
    category: "Web Development",
    language: ["React JS", "Tailwind CSS", "Node JS", "MySQL"],
  },
  {
    title: "Krittogota Prokasher DOA",
    description: "Mobile App",
    image: WB,
    aosEffect: "fade-up",
    category: "Mobile App",
    language: ["React JS", "Tailwind CSS", "Node JS", "MySQL"],
  },
  {
    title: "Custom Software",
    description: "Software Development",
    image: WB,
    aosEffect: "fade-down",
    category: "Web Development",
    language: ["React JS", "Tailwind CSS", "Node JS", "MySQL"],
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
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-yellow-600 font-medium text-sm sm:text-base uppercase">
          Awesome Works
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-green-600" data-aos="zoom-in-up">
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
          {["All", "Web Development", "eCommerce", "Mobile App"].map(
            (category, idx) => (
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
            )
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            data-aos={project.aosEffect}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            {/* Project Image */}
            <div className="relative w-full h-48 sm:h-56 lg:h-60 overflow-hidden rounded-t-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-40 transition duration-300"></div>
            </div>

            {/* Project Description */}
            <div className="flex items-center px-4 py-2 bg-gray-100">
              <FaLaptopCode className="text-green-500 w-6 h-6" />
              <h3 className="ml-3 text-gray-800 text-base font-medium">
                {project.description}
              </h3>
            </div>
            <div className="p-4">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                {project.title}
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.language.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs sm:text-sm bg-green-200 text-green-800 rounded-lg hover:bg-green-300 transition"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-12" data-aos="fade-up">
        <Button
          type="primary"
          size="large"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium shadow-md transition-transform transform hover:scale-105"
        >
          SEE MORE
        </Button>
      </div>
    </section>
  );
};

export default OurProject;
