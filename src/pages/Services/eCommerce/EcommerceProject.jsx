import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import WebsiteIMG1 from "../../../assets/course2.jpg";
import WebsiteIMG2 from "../../../assets/course3.jpg";
import WebsiteIMG3 from "../../../assets/course6.jpg";

const EcommerceProject = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const portfolioItems = [
    {
      image: WebsiteIMG1, // Replace with your image URL
      title: "Ecommerce Website Design",
      description: "Perfectly responsive on all devices",
    },
    {
      image: WebsiteIMG2, // Replace with your image URL
      title: "Nusuki Ecommerce Website",
      description: "Perfectly responsive on all devices",
    },
    {
      image: WebsiteIMG3, // Replace with your image URL
      title: "Ecommerce Website Design",
      description: "Perfectly responsive on all devices",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="text-center mb-12">
        <p data-aos="fade-down" className="text-yellow-700 text-center">
          Our Website
        </p>
        <h2
          className="text-3xl font-semibold text-gray-800"
          data-aos="fade-down"
        >
          Check Some Of Our Best{" "}
          <span className="text-blue-500">Ecommerce Website Design</span>
        </h2>
        <div
          className="mt-2 w-24 h-1 bg-blue-500 mx-auto"
          data-aos="fade-up"
        ></div>
      </div>
      <div className="flex justify-center gap-6 flex-wrap px-4">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="bg-white rounded-xl shadow-lg overflow-hidden w-80"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcommerceProject;
