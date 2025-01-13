import{ useEffect } from "react";
import { GiftOutlined, LaptopOutlined, BulbOutlined } from "@ant-design/icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);
  const features = [
    {
      icon: <GiftOutlined style={{ fontSize: "2rem", color: "#007BFF" }} />,
      title: "Developed by Expert",
      description:
        "Give us 4 weeks. Your website will be ready to launch! Perfectly optimized website. Customize your website and get your desired result.",
    },
    {
      icon: <LaptopOutlined style={{ fontSize: "2rem", color: "#007BFF" }} />,
      title: "Fully Optimized Website",
      description: "You decide exactly what you want from your website.",
    },
    {
      icon: <BulbOutlined style={{ fontSize: "2rem", color: "#007BFF" }} />,
      title: "Bring Your Ideas",
      description: "You decide exactly what you want from your website.",
    },
  ];

  return (
    <div className="flex justify-center gap-6 px-4 py-12 bg-gray-100">
      {features.map((feature, index) => (
        <div
          key={index}
          data-aos="fade-up"
          className="bg-white shadow-lg rounded-lg p-6 text-center w-80"
        >
          <div className="mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-500">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
