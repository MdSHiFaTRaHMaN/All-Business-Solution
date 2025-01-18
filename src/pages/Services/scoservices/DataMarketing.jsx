import React, { useEffect } from "react";
import Image from "../../../assets/data-driven-marketing.svg";
import { FaChartLine, FaDatabase, FaSyncAlt } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";

const DataMarketing = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="text-gray-600 body-font bg-gray-50 py-16">
      <div className="container mx-auto flex flex-wrap items-center">
        {/* Left Image Section */}
        <div
          className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden"
          data-aos="fade-up"
        >
          <img
            alt="Data-Driven Marketing"
            className="object-cover object-center h-full w-full shadow-lg"
            src={Image}
          />
        </div>

        {/* Right Content Section */}
        <div className="lg:w-1/2 w-full lg:pl-12 px-4" data-aos="fade-down">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaChartLine className="text-blue-600 mr-3" />
            Data-Driven Marketing
          </h1>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Our SEO team will implement basic or custom analytics to meet your
            needs. Our installations work to utilize data-driven marketing
            insights by correlating key performance indicators (KPIs) to help
            achieve your business goals.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaDatabase className="text-green-600 mr-3" />
            Own Your Data
          </h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            We primarily work with Google Analytics and Google Tag Manager, and
            we give you full administrative access directly from the source. We
            don’t hide behind an internal analytics solution that conceals
            reality or skews results. We give you results as they are—data you
            can trust and review yourself at any time.
          </p>

          <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
            <FaSyncAlt className="text-yellow-500 mr-3" />
            Ongoing Reports
          </h3>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Our team provides ongoing reports with detailed explanations,
            bringing consistency to your team with transparent campaign
            performance. Basic analytics is included with all of our SEO
            services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataMarketing;
