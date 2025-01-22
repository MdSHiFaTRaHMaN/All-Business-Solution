import { ArrowRightOutlined } from "@ant-design/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LongExperience from "../../../assets/Long-Experience.png";
import HighlyProfessional from "../../../assets/Highly-Professional.png";
import QuickSupport from "../../../assets/Quick-Support.png";
import FastDelivery from "../../../assets/Fast-Delivery.png";
import ExcellentUX from "../../../assets/Excellent-UI-UX.png";
import FocusOnResults from "../../../assets/Focus-On-Results.png";
import RunTechnicalAudit from "../../../assets/Run-Technical-Audit.png";
import SatisfiedGuarantee from "../../../assets/Satisfied-Guarantee.png";
import { Link } from "react-router-dom";

const features = [
  { title: "Long Experience", image: LongExperience },
  { title: "Highly Professional", image: HighlyProfessional },
  { title: "Quick Support", image: QuickSupport },
  { title: "Fast Delivery", image: FastDelivery },
  { title: "Excellent UI-UX", image: ExcellentUX },
  { title: "Focus On Results", image: FocusOnResults },
  { title: "Run Technical Audit", image: RunTechnicalAudit },
  { title: "Satisfied Guarantee", image: SatisfiedGuarantee },
];

const WhyHireUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-100 py-16 px-5 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div
          className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-center text-center"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            Why Hire Creative Tech Park?
          </h2>
          <Link to="/contact">
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md flex items-center gap-2 font-medium">
            Contact Us <ArrowRightOutlined />
          </button>
          </Link>
        </div>

        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-20 h-20"
              />
              <h3 className="mt-4 font-semibold text-gray-800">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyHireUs;
