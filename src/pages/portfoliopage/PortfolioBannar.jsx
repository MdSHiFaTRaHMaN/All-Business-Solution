import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Bannar from "../../assets/portfolio.png";

const PortfolioBannar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="relative h-screen flex items-center justify-center bg-gray-100"
      data-aos="fade-in"
    >
      {/* Background Image */}
      <img
        src={Bannar}
        alt="Portfolio Banner"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
      />

      {/* Overlay Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
    </div>
  );
};

export default PortfolioBannar;
