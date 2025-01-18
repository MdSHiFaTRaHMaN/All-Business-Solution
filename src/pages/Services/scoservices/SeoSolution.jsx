import React, { useEffect } from "react";
import { Button } from "antd";
import { FaMapMarkerAlt, FaShoppingCart, FaCog, FaChartBar } from "react-icons/fa";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

const SeoSolution = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animation
  }, []);

  return (
    <div className="bg-white px-6 lg:px-16 py-12">
      <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6">
        Which SEO Solution is right for you?
      </h1>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        We were founded on SEO over 25 years ago and with that much experience, we know what we're
        talking about when it comes to defining what searchers and search engines are looking for. 
        Whether you're a startup or an established brand, our team provides the tools and knowledge 
        you need to grow your business.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Local SEO */}
        <div
          className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition"
          data-aos="fade-up"
        >
          <div className="text-center">
            <FaMapMarkerAlt className="text-4xl text-green-500 mb-4 mx-auto " />
            <h3 className="text-xl font-semibold mb-2">Local SEO</h3>
          </div>
          <p className="text-gray-600 mb-4">
            If you hope to dominate, you need a complete local SEO strategy that drives results.
          </p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>Local search optimization</li>
            <li>Google Business Profile</li>
            <li>Citation setup and optimization</li>
            <li>Localized content creation</li>
          </ul>
          <Button type="primary" className="w-full">
            Learn More
          </Button>
        </div>

        {/* Ecommerce SEO */}
        <div
          className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text-center">
            <FaShoppingCart className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Ecommerce SEO</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Get clicks, drive conversions, and increase sales on your website with optimized
            eCommerce.
          </p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>Product optimization</li>
            <li>Site architecture</li>
            <li>Enhanced eCommerce analytics</li>
            <li>Brand awareness</li>
          </ul>
          <Button type="primary" className="w-full">
            Learn More
          </Button>
        </div>

        {/* Technical SEO */}
        <div
          className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="text-center">
            <FaCog className="text-4xl text-purple-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Technical SEO</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Technical SEO provides businesses with the foundation required to scale marketing
            success.
          </p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>Backlink analysis</li>
            <li>Website migrations</li>
            <li>Schema markup</li>
            <li>Image optimization</li>
          </ul>
          <Button type="primary" className="w-full">
            Learn More
          </Button>
        </div>

        {/* SEO Analytics */}
        <div
          className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="text-center">
            <FaChartBar className="text-4xl text-orange-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">SEO Analytics</h3>
          </div>
          <p className="text-gray-600 mb-4">
            All of our SEO services feature a basic analytics package. If you're ready for a bit
            more, explore!
          </p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>Google Analytics</li>
            <li>Google Tag Manager</li>
            <li>User behavior data</li>
            <li>Reporting and insights</li>
          </ul>
          <Button type="primary" className="w-full">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SeoSolution;
