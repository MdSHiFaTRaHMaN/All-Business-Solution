import React, { useEffect } from "react";
import { Card } from "antd";
import {
  FaTruck,
  FaPaintBrush,
  FaSearchDollar,
  FaSchool,
  FaMobileAlt,
  FaServer,
  FaShoppingCart,
  FaCode,
  FaGlobe,
} from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";

const services = [
  {
    icon: <FaTruck size={40} className="text-blue-500" />,
    title: "Courier Management Software",
    description: "Find the best courier management software near you!",
  },
  {
    icon: <FaPaintBrush size={40} className="text-blue-500" />,
    title: "Graphic Design",
    description:
      "Workspace Infotech has a solid experience in delivering Graphic/Web design services.",
  },
  {
    icon: <FaSearchDollar size={40} className="text-blue-500" />,
    title: "SEO & SMS Marketing",
    description:
      "SEO is the process of affecting the visibility of a website or a web page in a web search.",
  },
  {
    icon: <FaSchool size={40} className="text-blue-500" />,
    title: "School Management",
    description: "School Management",
  },
  {
    icon: <FaMobileAlt size={40} className="text-blue-500" />,
    title: "Mobile Applications Developments",
    description:
      "In our Web Applications all mobile apps are developed to deliver content.",
  },
  {
    icon: <FaServer size={40} className="text-blue-500" />,
    title: "Domain & Hosting",
    description:
      "Find Best 2020 Web Hosting providers using price comparisons, reviews, specials.",
  },
  {
    icon: <FaShoppingCart size={40} className="text-blue-500" />,
    title: "Ecommerce Solutions",
    description:
      "E-commerce (EC) is the buying and selling of goods and services.",
  },
  {
    icon: <FaCode size={40} className="text-blue-500" />,
    title: "Software Development",
    description:
      "We offer a completely bespoke business software design service.",
  },
  {
    icon: <FaGlobe size={40} className="text-blue-500" />,
    title: "Web Technology",
    description:
      "We offer unique services in web development ushered from its long technical history.",
  },
];

const ServicesGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <p className="text-yellow-800 text-center">OUR SERVICES</p>
      <h2 className="text-3xl font-bold text-center mb-10">
        THE THINGS WE ARE ABLE TO DO
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-20">
        {services.map((service, index) => (
          <Card
            key={index}
            data-aos="fade-up"
            hoverable
            className="shadow-lg rounded-lg"
          >
            <div className="flex flex-col items-center text-center p-5">
              {service.icon}
              <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
