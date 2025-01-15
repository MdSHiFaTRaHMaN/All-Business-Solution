import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLightbulb, FaBullseye } from "react-icons/fa";
import Mission from "../../assets/mission.png";
import Missionrun from "../../assets/missionrun.jpg";

const CompanyMission = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white py-16 px-4 sm:px-6 lg:px-20">
      {/* OUR VISION */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto gap-8">
        <img
          data-aos="fade-right"
          src={Mission}
          alt="Our Vision"
          className="w-full md:w-1/2 lg:w-[40%] object-cover rounded-lg transition-transform transform hover:scale-105"
        />
        <div
          data-aos="fade-left"
          className="flex flex-col items-start text-center md:text-left md:w-1/2"
        >
          <FaLightbulb size={50} className="text-green-500 mb-4 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-green-600 mb-4">
            OUR VISION
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            To be the leading company in Web & Mobile Application Development that empowers individuals and companies to transform their ideas into reality with innovative solutions.
          </p>
        </div>
      </div>

      {/* OUR MISSION */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-7xl mx-auto gap-8 mt-16">
        <div
          data-aos="fade-right"
          className="flex flex-col items-start text-center md:text-left md:w-1/2"
        >
          <FaBullseye size={50} className="text-blue-500 mb-4 animate-bounce" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-600 mb-4">
            OUR MISSION
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Our mission is to deliver high-quality, scalable, and user-centric solutions that drive business growth and innovation.
          </p>
        </div>
        <img
          data-aos="fade-left"
          src={Missionrun}
          alt="Our Mission"
          className="w-full md:w-1/2 lg:w-[40%] object-cover rounded-lg transition-transform transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default CompanyMission;
