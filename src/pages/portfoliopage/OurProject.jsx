import { useEffect } from "react";
import { Image } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import "antd/dist/reset.css";
import CrmProject from "../../assets/cmr project.png";
import RealState from "../../assets/Real state2.png";
import WingsBlast from "../../assets/wingsblast project.png";
import eCommarce from "../../assets/eCommarce Project.png";
import Hospital from "../../assets/hospital project.png";
import Education from "../../assets/Education project2.png";
import Socail from "../../assets/social project.jpg";
import Travel from "../../assets/travel project.png";
import EMR from "../../assets/EMR project.png";
import POS from "../../assets/POS project.png";


const OurProject = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const allProjects = [
    {
      id: 4,
      title: "Grostore Online Store",
      description:
        "Discover a world of flavors at [Website Name], your ultimate destination for mouthwatering recipes, restaurant recommendations, and food inspiration.",
      image: eCommarce,
      category: "WEB & APP",
    },
    {
      id: 2,
      title: "Real State Project",
      description:
        "PrestigeLabs includes an automated tax submission system, freeing up your time to focus on growing your business.",
      image: RealState,
      category: "APP",
    },
    {
      id: 3,
      title: "Food Order Management",
      description:
        "Discover a world of flavors at Wings Blast, your ultimate destination for mouthwatering recipes, restaurant recommendations, and food inspiration.",
      image: WingsBlast,
      category: "WEB & APP",
    },
    {
      id: 4,
      title: "Hospital & Clinic Management and Appointment System",
      description:
        "Discover a world of flavors at [Website Name], your ultimate destination for mouthwatering recipes, restaurant recommendations, and food inspiration.",
      image: Hospital,
      category: "WEB & APP",
    },
    {
      id: 5,
      title: "CRM Project Management",
      description:
        "The CRM Project Manager is a key player in the field of customer relationship management and digital marketing.",
      image: CrmProject,
      category: "WEB",
    },
    {
      id: 6,
      title: "General Education Website",
      description:
        "Welcome to General Education, your gateway to learning and growth. Explore a wide range of resources, courses, and tools designed to empower learners of all ages.",
      image: Education,
      category: "WEB",
    },
    {
      id: 7,
      title: "Social Networking Website",
      description:
        "Connect, share, and discover on Social, your online hub for building meaningful relationships and exploring communities that matter to you.",
      image: Socail,
      category: "WEB",
    },
    {
      id: 8,
      title: "POS (Point of Sale) Project",
      description:
        "Revolutionize the way you do business with POS (Point of Sale) Project, your ultimate Point of Sale (POS) solution.",
      image: POS,
      category: "APP",
    },
    {
      id: 9,
      title: "Travel Booking Website",
      description:
        "Embark on unforgettable adventures with Travel, your ultimate guide to exploring the world. Whether you're planning a weekend getaway or a dream vacation.",
      image: Travel,
      category: "WEB",
    },
    
    {
      id: 10,
      title: "ERM (Enterprise Risk Management) Project",
      description:
        "Empowering businesses to identify, assess, and manage risks,  ERM (Enterprise Risk Management) is your comprehensive platform for Enterprise Risk Management solutions.",
      image: EMR,
      category: "APP",
    },
  ];
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8 lg:px-20">
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Our Portfolio
        </h1>
        <p className="mt-3 text-gray-600 text-sm sm:text-base">
          Explore our recent projects across web and mobile platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project, index) => (
          <div
            key={project.id}
            className="bg-gray-50 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            {/* Image */}
            <div className="flex justify-center">

            <Image
              height={300}
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-56 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            </div>

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
    </section>
  );
};

export default OurProject;
