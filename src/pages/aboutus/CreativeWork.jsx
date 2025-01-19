import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode, FaRegLightbulb } from "react-icons/fa";
import { TbSignature } from "react-icons/tb";

const CreativeWork = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const works = [
    {
      icon: <FaLaptopCode className="text-5xl sm:text-6xl text-yellow-800" />,
      title: "Interface Design",
      description: "Implementation and rollout of new network infrastructure, including consolidation.",
      delay: 100,
    },
    {
      icon: <FaRegLightbulb className="text-5xl sm:text-6xl text-yellow-800" />,
      title: "Creative Always",
      description: "Innovative solutions with user-centric design and functionality.",
      delay: 200,
    },
    {
      icon: <TbSignature className="text-5xl sm:text-6xl text-yellow-800" />,
      title: "Real-time Editing",
      description: "Collaborative editing with real-time updates for better workflow.",
      delay: 300,
    },
  ];

  return (
    <section className="bg-white py-10 px-4 md:px-10">
      {/* Section Header */}
      <div data-aos="fade-up" className="text-center mb-10">
        <p className="text-yellow-800 uppercase tracking-wide">Awesome Works</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          Our Creative Works
        </h1>
      </div>

      {/* Creative Works Grid */}
      <div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto p-6"
  data-aos="fade-up"
>
  {works.map((work, index) => (
    <div
      key={index}
      className="relative flex flex-col items-center p-6 sm:p-8 bg-white border border-gray-200 shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700 hover:text-white"
      data-aos="zoom-in"
      data-aos-delay={work.delay}
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-yellow-600 group-hover:bg-white group-hover:text-yellow-300">
        {work.icon}
      </div>
      <h2 className="mt-6 text-xl sm:text-2xl font-bold text-center">
        {work.title}
      </h2>
      <p className="mt-3 text-center text-sm sm:text-base  leading-relaxed">
        {work.description}
      </p>
    </div>
  ))}
</div>

    </section>
  );
};

export default CreativeWork;
