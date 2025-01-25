import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { RocketOutlined } from "@ant-design/icons";
import { FaLightbulb, FaTools, FaClipboardCheck } from "react-icons/fa";
import Dev from "../../assets/coderdev.jpg";

const WhyChoose = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="w-full lg:w-10/12 mx-auto p-5 lg:p-0">
      <div className="text-center mb-20 pt-7" data-aos="fade-up">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Our <span className="font-bold">Process</span>
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
          Appnality’s industry leading web and app development services offers a
          seamless work flow for custom applications and websites development.
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:grid-cols-3 gap-3 items-center">
        <div>
          <div
            className="mb-7 group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
            data-aos="fade-up"
          >
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                <FaLightbulb className="text-5xl text-white transition-all" />
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h3 className="text-2xl font-bold mb-4">Inspired Ideation</h3>
                <p>
                  We first brainstorm and align the initial ideas with your
                  vision and mission to build the solid foundation for your
                  E-commerce web project
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
          >
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                <FaTools className="text-5xl text-white transition-all" />
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h3 className="text-2xl font-bold mb-4">
                  Design & Development
                </h3>
                <p>
                  Our team designs visually appealing, responsive, and
                  functional platforms customized to your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={Dev}
            width={420}
            alt="Development"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div>
          <div
            data-aos="fade-up"
            className="mb-7 group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
          >
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                <FaClipboardCheck className="text-5xl text-white transition-all" />
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h3 className="text-2xl font-bold mb-4">
                  Testing & Refinement
                </h3>
                <p>
                  We test everything to ensure flawless performance and an
                  exceptional user experience to make sure everything is good to
                  go.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
          >
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                <RocketOutlined className="text-5xl text-white transition-all" />
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h3 className="text-2xl font-bold mb-4">Launch & Optimize</h3>
                <p>
                  After launch, we optimize your site to keep it running at peak
                  performance as your business grows in the market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
