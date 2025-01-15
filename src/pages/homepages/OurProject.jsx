import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "antd";
import { FaLaptopCode } from "react-icons/fa";
import WB from "../../assets/wingsBlast.png"; // Replace with the correct image path.

const projects = [
  {
    title: "Wings Blast",
    description: "eCommerce",
    image: WB,
    aosEffect: "fade-up",
    language: ["React JS", "Tailwind CSS", "Node JS", "MySQL"],
  },
  {
    title: "Lamyakun",
    description: "Web Development",
    image: WB,
    aosEffect: "fade-left",
    language: ["React JS", "Tailwind CSS", "Node JS", "MySQL"],
  },
  {
    title: "Krittogota Prokasher DOA",
    description: "Mobile Application",
    image: WB,
    aosEffect: "fade-right",
    language: ["React JS", "Tailwind CSS", "Node JS", "MySQL"],
  },
  {
    title: "Custom Software",
    description: "Software Development",
    image: WB,
    aosEffect: "zoom-in",
    language: ["React JS", "Tailwind CSS", "Node JS", "MySQL"],
  },
];

const OurProject = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-base sm:text-lg text-yellow-800 font-medium uppercase">
          Awesome Works
        </p>
        <h1 className="text-2xl sm:text-4xl font-bold text-green-600">
          Our Creative Works
        </h1>
        <p className="text-sm sm:text-lg text-gray-600 mt-2">
          Explore some of our amazing projects tailored to your business needs.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center mt-6 space-x-2 overflow-x-auto scrollbar-hide">
          {["All", "Web Development", "eCommerce", "Mobile App",].map((category, idx) => (
            <button
              key={idx}
              className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-200 text-gray-800 text-sm sm:text-base rounded hover:bg-green-500 hover:text-white transition duration-300"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos={project.aosEffect}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-56 lg:h-60 object-cover rounded-t-lg"
            />
            <div className="flex items-center px-4 py-2 bg-gray-200">
              <FaLaptopCode className="text-green-500 w-5 h-5" />
              <h3 className="ml-2 text-gray-800 text-sm sm:text-base">
                {project.description}
              </h3>
            </div>
            <div className="px-4 py-3">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                {project.title}
              </h2>

              {/* Tech Stack Buttons */}
              {project.language && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.language.map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs sm:text-sm text-green-800 bg-green-200 rounded hover:bg-green-300 transition"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* SEE MORE Button */}
      <div className="flex justify-center mt-12">
        <Button
          type="primary"
          size="large"
          className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-lg transition-transform transform hover:scale-105"
        >
          SEE MORE
        </Button>
      </div>
    </div>
  );
};

export default OurProject;
