import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import MobileImage from "../../../assets/mobile-banner.png";

// Initialize AOS
AOS.init();

const MobileResponsive = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 flex flex-wrap items-center">
        {/* Left Section: Mobile Image */}
        <div
          className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="w-full max-w-md">
            <img src={MobileImage} alt="Mobile-Friendly Design" />
          </div>
        </div>

        {/* Right Section: Text Content */}
        <div
          className="w-full lg:w-1/2 text-center lg:text-left px-6"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            <span className="text-blue-700"> Mobile-Friendly, Crispy</span> And{" "}
            <span className="text-blue-700">Responsive</span>
          </h2>
          <h3 className="text-blue-500 text-xl font-medium ">
            Web Design And Development
          </h3>
          <span className="h-[1px] w-[70px] bg-blue-500 inline-block my-2"></span>
          <p className="text-gray-600">
            Laptop, mobile, or any other devices—whatever customer will use,
            your website will be designed and developed to fit it all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobileResponsive;
