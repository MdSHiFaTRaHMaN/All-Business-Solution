import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import AppProject1 from "../../../assets/appproject1.png"
import AppProject2 from "../../../assets/appproject2.png"
import AppProject3 from "../../../assets/appproject333.png"
import AppProject4 from "../../../assets/appproject44.png"
import AppProject5 from "../../../assets/travel-app-project.png"

const industries = [
  { title: "Food Delivary", image: AppProject1 },
  { title: "Automobile", image: AppProject2 },
  { title: "Business", image: AppProject3 },
  { title: "eCommerce", image: AppProject4 },
  { title: "Travel", image: AppProject5 },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const MobileApp = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const carouselRef = useRef(null);

  const handlePrev = () => {
    carouselRef.current?.previous();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  return (
    <div className="py-12 bg-white text-center w-full lg:w-10/12 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">
        <span className="text-red-500">Industries</span> We Have Served
      </h2>

      <div className="mt-8 relative">
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite={true}
          draggable
          swipeable
          pauseOnHover
          keyBoardControl
          showDots={false}
          arrows={false}
          containerClass="container-padding-bottom"
          itemClass="px-4"
        >
          {industries.map((industry, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              className="bg-gradient-to-b from-red-500 to-black rounded-lg p-6 shadow-lg"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-96 transition-transform transform hover:scale-125 object-cover rounded-lg"
              />
              <div className="mt-4 bg-gray-700 hover:bg-red-500 transition-all text-white py-2 rounded-lg font-semibold">
                {industry.title}
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex justify-center items-center mt-6 gap-4">
        <button onClick={handlePrev} className="text-red-500 text-2xl">
          <FaArrowLeftLong  />
        </button>
        <button onClick={handleNext} className="text-red-500 text-2xl">
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default MobileApp;
