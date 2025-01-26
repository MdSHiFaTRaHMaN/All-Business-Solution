import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import WebsiteIMG1 from "../../../assets/eCommarce Project.png";
import WebsiteIMG2 from "../../../assets/wacthshop project.png";
import WebsiteIMG3 from "../../../assets/wingsblast project.png";
import { Link } from "react-router-dom";

const WebDevProject = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: "Grocery Online Store",
      description: "Discover a world of flavors at Online Store",
      image: WebsiteIMG1,
      category: "WEB & APP",
    },
    {
      id: 13,
      title: "Luxury Watches",
      description: "Welcome to Luxury Watches.",
      image: WebsiteIMG2,
      category: "WEB",
    },
    {
      id: 3,
      title: "Food Order Management",
      description: "Discover a world of flavors at Wings Blast.",
      image: WebsiteIMG3,
      category: "WEB & APP",
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
          <span className="text-blue-500">Web Devlopment Project</span>
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
            className="bg-gray-100 rounded-xl shadow-lg overflow-hidden w-80"
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
      <Link to="/portfolio" className="flex justify-center my-7 ">
        <button className="btn relative inline-flex items-center overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-3 px-5">
          <span className="w-56 h-48 rounded bg-gray-800 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-gray-800 transition-colors duration-300 ease-in-out group-hover:text-white">
            SEE MORE
          </span>
        </button>
      </Link>
    </div>
  );
};

export default WebDevProject;
