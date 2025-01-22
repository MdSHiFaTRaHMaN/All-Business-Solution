import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaPhp, FaLaravel, FaWordpress, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiJquery, SiMysql, SiTailwindcss, SiFlutter, SiNuxtdotjs, SiNextdotjs, SiHostinger } from "react-icons/si";
import { AiFillThunderbolt } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const MyExprience = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const techs = [
    { icon: <FaHtml5 className="text-red-500" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
    { icon: <SiJquery className="text-blue-400" />, name: "jQuery" },
    { icon: <AiFillThunderbolt className="text-purple-500" />, name: ".NET" },
    { icon: <FaPhp className="text-purple-700" />, name: "PHP" },
    { icon: <SiMysql className="text-blue-600" />, name: "MySQL" },
    { icon: <FaLaravel className="text-red-500" />, name: "Laravel" },
    { icon: <FaVuejs className="text-green-500" />, name: "Vue.js" },
    { icon: <SiFlutter className="text-blue-400" />, name: "Flutter" },
    { icon: <FaWordpress className="text-blue-600" />, name: "WordPress" },
    { icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },
    { icon: <SiTailwindcss className="text-blue-400" />, name: "Tailwind CSS" },
    { icon: <FaReact className="text-blue-400" />, name: "React" },
    { icon: <SiNuxtdotjs className="text-green-400" />, name: "Nuxt.js" },
    { icon: <SiHostinger  className="text-blue-500" />, name: "Hostinger" },
    { icon: <SiNextdotjs className="text-black" />, name: "Next.js" },
    { icon: <SiJavascript className="text-yellow-500" />, name: "JavaScript" },
    { icon: <FaWordpress className="text-blue-600" />, name: "WPBakery" },
  ];

  return (
    <div className="bg-gray-50 p-5">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800" data-aos="fade-down">Technologies We Work With</h1>
        <p className="text-gray-600" data-aos="fade-up">Technologies We Specialize In</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white shadow-lg hover:shadow-2xl rounded-lg"
            data-aos="zoom-in"
          >
            <div className="text-4xl mb-2">{tech.icon}</div>
            <p className="text-gray-700 font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyExprience;
