import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card } from "antd";

const services = [
  {
    title: "Software Development",
    description:
      "Custom Software Development Solutions to drive your digital success. Unlock new possibilities for your business with Technobd Limited's expert software consulting and development services.",
    icon: "🛠️",
  },
  {
    title: "Development Outsourcing Services",
    description:
      "Get your software developed by experienced professionals. With over 22 years of experience and a team of 50+ experts, Technobd Limited offers top-quality software development outsourcing services to businesses of all sizes and across various industries.",
    icon: "✈️",
  },
  {
    title: "Custom Software Development",
    description:
      "Tailored to your business requirements. With over 22 years of experience and expertise in delivering custom software development solutions for businesses across 12+ industries, Technobd Limited can provide you with powerful and reliable software solutions that cater to your specific needs.",
    icon: "💻",
  },
  {
    title: "Legacy Software Modernization",
    description:
      "Tailored to your business requirements. With over 22 years of experience and expertise in delivering custom software development solutions, Technobd Limited can provide you with powerful and reliable software solutions that cater to your specific needs.",
    icon: "♻️",
  },
  {
    title: "Software Product Development",
    description:
      "At Technobd Limited, we are dedicated to helping businesses create marketable software products that are tailored to their specific needs. Our end-to-end outsourced product development services are designed to help you design, architect, and deliver user-friendly software products of the highest quality.",
    icon: "📦",
  },
  {
    title: "Web Development Service",
    description:
      "Technobd Limited provides high-quality development such as web design and development, database design & integration, programming, website maintenance, e-commerce solutions, and application program development.",
    icon: "🌐",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100, 
      easing: "ease-in-out",
      once: false, 
    });
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-600 text-c">
          THE THINGS <br /> WE ARE ABLE TO DO
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Since 2001, over 700 companies have worked with Technobd Limited.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-20">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up" // Animation type
            data-aos-delay={`${index * 100}`} // Delay for staggered animations
          >
            <Card
              className="hover:shadow-lg transition-shadow duration-300"
              title={
                <div className="flex items-center gap-4">
                  <span className="text-3xl bg-green-100 p-2 rounded-full">
                    {service.icon}
                  </span>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
              }
            >
              <p className="text-gray-600 h-[120px]">{service.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
