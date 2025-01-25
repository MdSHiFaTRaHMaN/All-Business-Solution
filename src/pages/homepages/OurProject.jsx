import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, Tag, Tooltip } from "antd";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import Projact1 from "../../assets/wingsblast project.png";
import Project2 from "../../assets/eCommarce Project.png";
import Project3 from "../../assets/realstate project.png";
import Project4 from "../../assets/hospital project.png";
import Project5 from "../../assets/travel project.png";
import Project6 from "../../assets/wacthshop project.png";

const projects = [
  {
    title: "Food Order Management",
    description:
      "Discover a world of flavors at Wings Blast, your ultimate destination for mouthwatering recipes, restaurant recommendations, and food inspiration.",
    image: Projact1,
    aosEffect: "fade-up",
    category: "eCommerce",
    language: ["React JS", "Tailwind CSS", "Node JS", "MySQL"],
  },
  {
    title: "Grocery Online Store",
    description:
      "Discover a world of flavors at Grocery Store, your ultimate destination for mouthwatering recipes, restaurant recommendations, and food inspiration.",
    image: Project2,
    aosEffect: "fade-up",
    category: "Web Development",
    language: ["React JS", "Tailwind CSS", "Node JS", "MySQL"],
  },
  {
    title: "Real State Project",
    description:
      "PrestigeLabs includes an automated tax submission system, freeing up your time to focus on growing your business.",
    image: Project3,
    aosEffect: "fade-up",
    category: "Software Development",
    language: ["Dart(OP)", "Flatter", "Rest API", "MySQL"],
  },
  {
    title: "Hospital & Clinic Management and Appointment System",
    description:
      "Discover a world of flavors at Wings Blast, your ultimate destination for mouthwatering recipes, restaurant recommendations, and food inspiration.",
    image: Project4,
    aosEffect: "fade-up",
    category: "eCommerce",
    language: ["React JS", "Tailwind CSS", "Node JS", "MySQL"],
  },
  {
    title: "Travel Booking Website",
    description:
      "Embark on unforgettable adventures with Travel, your ultimate guide to exploring the world. Whether you're planning a weekend getaway or a dream vacation.",
    image: Project5,
    aosEffect: "fade-up",
    category: "Health & Fitness",
    language: ["React Native", "Expo", "MongoDB"],
  },
  {
    title: "eCommerce Website",
    description:
      "Welcome to Luxury Watches, where sophistication meets precision. We curate an exclusive collection of luxury timepieces crafted by the world’s most esteemed watchmakers.",
    image: Project6,
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
        {/* <div
          data-aos="fade-up"
          className="flex justify-center mt-6 space-x-3 overflow-x-auto scrollbar-hide"
        >
          {[
            "All",
            "Web Development",
            "eCommerce",
            "Software Development",
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
        </div> */}
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
          <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-3 px-5">
            <span className="w-56 h-48 rounded bg-black absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              SEE MORE
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default OurProject;
