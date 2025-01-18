import React, { useEffect } from "react";
import { Button } from "antd";
import { FaSearch } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ScoPackages = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations
  }, []);

  const packages = [
    {
      title: "SEO ESSENTIALS",
      description:
        "A flexible, low-risk solution for SEO growth - perfect for small businesses & start-ups",
      price: "$99/mo",
      billing: "WHEN BILLED ANNUALLY",
      animationDelay: "0",
    },
    {
      title: "SEO STANDARD",
      description:
        "Modern, cutting-edge optimization strategies - all executed for a reasonable price",
      price: "$199/mo",
      billing: "WHEN BILLED ANNUALLY",
      animationDelay: "200",
    },
    {
      title: "SEO PREMIUM",
      description:
        "For companies ready for an advanced, wide-reaching & dominate approach to SEO",
      price: "$399/mo",
      billing: "WHEN BILLED ANNUALLY",
      animationDelay: "400",
    },
    {
      title: "SEO CUSTOM",
      description:
        "When only the best will do - We offer full-service SEO packages to achieve your goals",
      price: "$999/mo",
      billing: "WHEN BILLED ANNUALLY",
      animationDelay: "600",
    },
  ];

  return (
    <div className="bg-gray-100 px-6 lg:px-16 py-12">
      {/* Header Section */}
      <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6">
        Affordable SEO Packages
      </h1>
      <p className="text-gray-600 text-center max-w-4xl mx-auto mb-12">
        At Mainstreethost, we offer a variety of SEO services to help your
        business grow. Our flexible SEO packages are focused on building a
        strong foundation for your online success, offering countless ways to
        reach your target customers—wherever they are searching.
      </p>

      {/* Packages Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            data-aos="fade-up"
            data-aos-delay={pkg.animationDelay}
          >
            {/* Icon */}
            <div className="flex justify-center -mt-12 mb-6">
              <div className="rounded-full p-3 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg">
                <FaSearch className="text-4xl text-white" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-center mb-4">{pkg.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-center mb-4">{pkg.description}</p>

            {/* Pricing */}
            <div className="text-center mb-6">
              <h4 className="text-3xl font-bold text-gray-800">{pkg.price}</h4>
              <p className="text-sm text-gray-500">{pkg.billing}</p>
            </div>

            {/* Button */}
            <div className="text-center">
              <Button type="primary" size="large" className="w-full">
                GET STARTED
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoPackages;
