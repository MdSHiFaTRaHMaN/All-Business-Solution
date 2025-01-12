import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Bannar from "../../assets/blog.png";
import { Link } from "react-router-dom";

const Articlebannar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="relative w-full h-[50vh] lg:h-[70vh]">
      <img
        src={Bannar}
        alt="Blog Banner"
        className="object-cover w-full h-full"
        data-aos="fade-up"
      />
      <div
        className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50"
        data-aos="fade-in"
        data-aos-delay="500"
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3">
          Articles
        </h1>
        <p className=" text-gray-300 text-center px-4 lg:px-0">
          <div className="text-white">
            <Link to="/">Home</Link> / <Link to="/Article">Article</Link>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Articlebannar;
