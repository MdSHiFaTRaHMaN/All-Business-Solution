import { useEffect } from "react";
import eCommerce from "../../../assets/e-commarce.jpg";
import { FaShoppingCart, FaCogs, FaBullhorn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles

const AboutEcommerce = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);

  return (
    <div>
      <div className="container flex flex-col px-16 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2" data-aos="fade-up">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800  lg:text-4xl">
              Custom Design And Development Procedure Of The{" "}
              <span className="text-orange-700">Ecommerce Website</span>
            </h1>

            <div className="mt-8 space-y-5">
              <p className="flex items-center -mx-2 text-gray-700">
                <FaShoppingCart className="w-6 h-6 mx-2 text-blue-500" />
                <span className="mx-2 text-xl font-semibold">eCommerce Consultancy</span>
              </p>

              <p className="flex items-center -mx-2 text-gray-700">
                <FaCogs className="w-6 h-6 mx-2 text-blue-500" />
                <span className="mx-2 text-xl font-semibold">eCommerce Web Development</span>
              </p>

              <p className="flex items-center -mx-2 text-gray-700">
                <FaBullhorn className="w-6 h-6 mx-2 text-blue-500" />
                <span className="mx-2 text-xl font-semibold">eCommerce Marketing</span>
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-center w-full h-96 lg:w-1/2"
          data-aos="fade-left"
        >
          <img
            className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
            src={eCommerce}
            alt="ecommerce"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutEcommerce;
