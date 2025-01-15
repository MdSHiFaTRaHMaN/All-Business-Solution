import { useEffect } from "react";
import { Tabs } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import "antd/dist/reset.css";
import ProjectIMG1 from "../../assets/article.png";
import ProjectIMG2 from "../../assets/article1.jpg";
import ProjectIMG3 from "../../assets/article2.jpg";

const OurProject = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const allProjects = [
    {
      id: 1,
      title: "Alan",
      description:
        "ALAN boasts a powerful SMS Management System ensuring that messages are delivered promptly and reliably.",
      image: ProjectIMG1,
      category: "WEB",
    },
    {
      id: 2,
      title: "Prestige Labs",
      description:
        "PrestigeLabs includes an automated tax submission system, freeing up your time to focus on growing your business.",
      image: ProjectIMG2,
      category: "WEB",
    },
    {
      id: 3,
      title: "Mobile App Project",
      description:
        "A cutting-edge mobile application designed to streamline task management on the go.",
      image: ProjectIMG3,
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
    <section className="bg-white py-12 px-4 md:px-8 lg:px-20">
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Our Portfolio
        </h1>
        <p className="mt-3 text-gray-600 text-sm sm:text-base">
          Explore our recent projects across web and mobile platforms.
        </p>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto">
        <Tabs
          defaultActiveKey="ALL"
          centered
          items={tabItems}
          animated={{ inkBar: true, tabPane: true }}
        />
      </div>
    </section>
  );
};

const ProjectGrid = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="bg-gray-50 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-up"
          data-aos-delay={`${index * 200}`}
        >
          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-56 object-cover"
          />

          {/* Content */}
          <div className="p-5">
            <h2 className="text-xl font-semibold text-gray-800">
              {project.title}
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              {project.description}
            </p>
            <div className="mt-4">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
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
