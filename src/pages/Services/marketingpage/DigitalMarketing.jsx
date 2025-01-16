import { useEffect } from "react";
import { Button, Card } from "antd";
import {
  AiOutlineLineChart,
  AiOutlineGlobal,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FaBullhorn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import LightImage from "../../../assets/lightimage.png";
import LowCost from "../../../assets/lowcost.png";

const DigitalMarketing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 bg-white">
      {/* First Section */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-5 px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          {/* Content Section */}
          <div data-aos="fade-up">
            <h2 className="text-xl font-semibold text-blue-500 mb-2 tracking-wide uppercase">
              DIGITAL MARKETING SUPPORT
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Find the Best Digital Marketing Solution from
              <span className="text-blue-600"> ABS</span>
              <br /> at a Low Cost
            </h1>
            <p className="text-gray-600 mt-6 text-base sm:text-lg">
              Almost every aspect of our life is mostly controlled or influenced
              by the internet. From ordering food to staying connected with
              friends, shopping, and even working remotely, the internet has
              become integral to our lives. It's only natural to take your
              business online too.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center" data-aos="zoom-in">
            <div className="relative">
              <img
                src={LowCost}
                alt="Digital Marketing"
                className="w-64 sm:w-80 md:w-96 lg:w-[450px]"
              />
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-100 rounded-full blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-yellow-100 rounded-full blur-xl opacity-70 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* What is Digital Marketing Section */}
      <div className="bg-gradient-to-r from-white via-blue-50 to-white py-5 px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div data-aos="zoom-in" className="flex justify-center relative">
            <img
              src={LightImage}
              alt="Marketing Strategy"
              className="w-48 sm:w-64 md:w-80 lg:w-[350px]"
            />
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-blue-100 rounded-full blur-2xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-pink-100 rounded-full blur-2xl opacity-60 animate-pulse"></div>
          </div>

          {/* Content Section */}
          <div data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-snug mb-6">
              What is Digital Marketing, and Why Do You Need It?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              Of the many marketing mediums, Digital Marketing is the most
              popular and rapidly growing. Since the 1990s, digital platforms
              like laptops, desktops, and mobile phones have become essential
              tools for marketing strategies. Today, digital platforms have
              replaced traditional marketplaces, offering diverse strategies
              like SEO, content marketing, influencer marketing, and more.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              Do you need digital marketing? Absolutely! In a world where
              everyone is online 24/7, digital marketing is the most effective
              way to reach your audience. It’s affordable, scalable, and helps
              showcase your products efficiently to a massive audience.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Consider this: On average, every person has 3 to 7 social media
              accounts. About 22% of the global population has a Facebook
              account, and they spend an average of two hours daily online.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose ABS Section */}
      <div className="my-5" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-6">
          Why ABS is the best option for digital marketing?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card hoverable className="shadow-lg" data-aos="flip-up">
            <AiOutlineLineChart className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Data-Driven Strategies</h3>
            <p className="text-gray-600">
              We use advanced analytics to craft marketing strategies that drive
              results.
            </p>
          </Card>

          <Card hoverable className="shadow-lg" data-aos="flip-up">
            <AiOutlineGlobal className="text-4xl text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Global Reach</h3>
            <p className="text-gray-600">
              Expand your business globally with our tailored digital marketing
              campaigns.
            </p>
          </Card>

          <Card hoverable className="shadow-lg" data-aos="flip-up">
            <FaBullhorn className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Expert Support</h3>
            <p className="text-gray-600">
              Get professional support from our experienced marketing team.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
