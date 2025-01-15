import React, { useEffect } from "react";
import { PlusCircleOutlined } from "@ant-design/icons"; // Import Ant Design icons
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

const features = [
  {
    id: 1,
    title: "Unmatched Experience",
    description:
      "With over 22 years in the industry, Technobd Limited has honed its craft, delivering stellar software solutions across 12 different industries. Our experience equips us to handle diverse projects with efficiency and finesse..",
    image: "experience-image-path.jpg", // Replace with your image path
    color: "text-green-500",
  },
  {
    id: 2,
    title: "Prolific Portfolio",
    description:
      "Our track record is a testament to our competency - over 500 successful projects and counting. Each project has strengthened our ability to provide customized, top-notch solutions to our clients..",
    image: "portfolio-image-path.jpg",
    color: "text-red-500",
  },
  {
    id: 3,
    title: "Talented Team",
    description:
      "Our team is our strength. Comprising of more than 50 highly skilled professionals, we blend creativity and technical prowess to meet and exceed our clients' expectations.",
    image: "team-image-path.jpg",
    color: "text-blue-500",
  },
  {
    id: 4,
    title: "Innovation-Driven Approach",
    description:
      "At Technobd Limited, we believe in pushing boundaries. Our forward-thinking mindset drives us to leverage cutting-edge technologies and methodologies to deliver unique, future-ready solutions.",
    image: "innovation-image-path.jpg",
    color: "text-purple-500",
  },
];

const WhyChoose = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100, 
      easing: "ease-in-out", 
      once: false,
    });
  }, []);
  return (
    <div className=" flex items-center justify-center p-8">
      <div className="bg-white rounded-xl p-2 lg:p-10 max-w-6xl">
        {/* Header Section */}
        <div data-aos="fade-up" className="text-center">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Why Choose Us?
          </h1>
          <p className="italic text-gray-600 mb-8">
            “Crafting Digital Excellence with Proven Expertise and Innovation”
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="flex items-start space-x-4"
            >
              {/* Content */}
              <div>
                <h3 className="flex items-center space-x-2 text-lg font-bold text-gray-800">
                  <span className={`${feature.color}`}>
                    <PlusCircleOutlined className="text-xl" />
                  </span>
                  <span>{feature.title}</span>
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
