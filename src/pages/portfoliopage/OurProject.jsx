import { useEffect } from "react";
import { Tabs } from "antd"; // Ant Design Tabs
import AOS from "aos";
import "aos/dist/aos.css";
import "antd/dist/reset.css"; // Ant Design styles
import ProjectIMG1 from "../../assets/article.png"
import ProjectIMG2 from "../../assets/article1.jpg"
import ProjectIMG3 from "../../assets/article2.jpg"

const OurProject = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const allProjects = [
    {
      id: 1,
      title: "Alan",
      description:
        "ALAN boasts a powerful SMS Management System ensuring that messages are delivered promptly and reliably.",
      image: ProjectIMG1, // Replace with your actual image
      category: "WEB",
    },
    {
      id: 2,
      title: "Prestige Labs",
      description:
        "PrestigeLabs includes an automated tax submission system, freeing up your time to focus on growing your business.",
      image: ProjectIMG2, // Replace with your actual image
      category: "WEB",
    },
    {
      id: 3,
      title: "Mobile App Project",
      description:
        "A cutting-edge mobile application designed to streamline task management on the go.",
      image: ProjectIMG3, // Replace with your actual image
      category: "MOBILE APP",
    },
  ];

  const filterProjects = (category) =>
    category === "ALL"
      ? allProjects
      : allProjects.filter((project) => project.category === category);

  const tabItems = [
    {
      key: "ALL",
      label: "ALL",
      children: <ProjectGrid projects={filterProjects("ALL")} />,
    },
    {
      key: "MOBILE APP",
      label: "MOBILE APP",
      children: <ProjectGrid projects={filterProjects("MOBILE APP")} />,
    },
    {
      key: "WEB",
      label: "WEB",
      children: <ProjectGrid projects={filterProjects("WEB")} />,
    },
  ];

  return (
    <section className="bg-white py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold text-gray-800">Our Portfolio</h1>
      </div>

      {/* Ant Design Tabs */}
      <div className="container mx-auto px-5 lg:px-0">
        <Tabs defaultActiveKey="ALL" centered items={tabItems} />
      </div>
    </section>
  );
};

const ProjectGrid = ({ projects }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 w-10/12 mx-auto">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="flex flex-col lg:flex-row items-center bg-gray-50 shadow-lg rounded-lg p-3 hover:shadow-2xl transition duration-300"
          data-aos="fade-up"
          data-aos-delay={`${index * 200}`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="mt-5 lg:mt-0 lg:ml-6 lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
            <p className="mt-3 text-gray-600">{project.description}</p>
            <div className="mt-4">
              <span className="text-sm px-3 py-1 bg-gray-200 text-gray-700 rounded-full">
                {project.category}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurProject;
