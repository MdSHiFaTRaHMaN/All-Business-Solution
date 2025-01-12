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
      once: false,
    });
  }, []);

  return (
    <div className="bg-gray-100 py-12">
      <div className="text-center mb-12">
        <p className="text-lg text-yellow-800 font-medium uppercase">
          Awesome Works
        </p>
        <h1 className="text-4xl font-bold text-green-600">
          Our Creative Works
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Explore some of our amazing projects tailored to your business needs.
        </p>
        <div className="flex justify-center mt-6 space-x-4">
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            All
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
            Accounting Software
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
            Web Development
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
            eCommerce
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
            Mobile App
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
            School management software
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-20">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos={project.aosEffect}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-40 rounded-t-lg"
            />
            <div className="flex items-center px-6 py-3 bg-gray-200">
              <FaLaptopCode className="text-green-500 w-6 h-6" />
              <h3 className="ml-2 text-gray-800">{project.description}</h3>
            </div>
            <div className="px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h2>
              {project.language && (
                <div className="mt-4">
                  <h4 className="text-md font-medium text-gray-700">
                    Technologies:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 flex gap-3">
                    {project.language.map((lang, idx) => (
                      <li key={idx} className="flex mt-2">
                        <button className="px-3 py-1 text-sm font-medium text-green-800 bg-green-200 rounded hover:bg-green-300">
                          {lang}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button color="pink" variant="outlined" className="p-5 font-semibold">
          SEE MORE
        </Button>
      </div>
    </div>
  );
};

export default OurProject;
