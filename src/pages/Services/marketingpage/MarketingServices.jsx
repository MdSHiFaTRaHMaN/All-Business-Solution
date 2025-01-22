import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "../../../assets/digital-marketing-services.png";

const MarketingServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const consultancyServices = [
    "Full-Stack Marketing Consulting",
    "Market Research",
    "Strategy Creation",
    "Business Planning",
    "Digital space personalization",
    "Leveraging online media and channels",
    "Helping maximize the use of digital communications",
    "Generate business leads",
    "Increase sales conversions",
  ];

  return (
    <div className="bg-gray-50 p-6 sm:p-10 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 w-full max-w-6xl">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-up">
          <img
            src={Services}
            alt="Digital Marketing Services"
            className="max-w-full"
          />
        </div>

        {/* Consultancy Services Section */}
        <div
          className="w-full lg:w-1/2 bg-white p-6"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">
            Types of Internet Marketing Consultancy Services
          </h2>
          <ul className="space-y-4">
            {consultancyServices.map((service, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 text-gray-700"
              >
                <span className="w-4 h-4 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full flex-shrink-0" />
                <span className="text-base font-medium">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MarketingServices;