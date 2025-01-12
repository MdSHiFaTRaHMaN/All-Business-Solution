import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode, FaRegLightbulb } from "react-icons/fa";
import { TbSignature } from "react-icons/tb";

const CreativeWork = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="bg-white w-full lg:w-8/12 mx-auto">
      <div className="container px-6 py-10 mx-auto">
        {/* Section Header */}
        <div data-aos="fade-up">
          <p className="text-yellow-800 text-center">Awesome Works</p>
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
            Our Creative Works.
          </h1>
        </div>

        {/* Creative Works Section */}
        <div
          className="flex justify-center gap-7 mt-8"
          data-aos="fade-up"
        >
          {/* Work Item 1 */}
          <div
            className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#AF986F]"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <FaLaptopCode className="text-7xl" />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
              Interface Design
            </h1>
            <p className="mt-2 text-gray-500 capitalize group-hover:text-white text-center">
              Implementation and rollout of new network infrastructure,
              including consolidation.
            </p>
          </div>

          {/* Work Item 2 */}
          <div
            className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#AF986F]"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <FaRegLightbulb className="text-7xl" />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
              Creative Always
            </h1>
            <p className="mt-2 text-gray-500 capitalize group-hover:text-white text-center">
              Implementation and rollout of new network infrastructure,
              including consolidation.
            </p>
          </div>

          {/* Work Item 3 */}
          <div
            className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#AF986F]"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <TbSignature className="text-7xl" />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
              Real-time Editing
            </h1>
            <p className="mt-2 text-gray-500 capitalize group-hover:text-white text-center">
              Implementation and rollout of new network infrastructure,
              including consolidation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeWork;
