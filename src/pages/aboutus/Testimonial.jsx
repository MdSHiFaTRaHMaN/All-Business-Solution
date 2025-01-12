import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card } from "antd"; // Ant Design Card
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import CEO from "../../assets/Ceo.jpg";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center bg-gray-100 py-7 px-4">
      {/* Header Section */}
      <div className="flex gap-5">
        <div className="w-full md:w-1/3">
          <img
            src={CEO}
            alt="Client"
            className="rounded object-cover shadow-lg w-[300px]"
          />
        </div>
        <div className="mb-12" data-aos="fade-up">
          <h3 className="text-yellow-700 text-sm tracking-wider">
            TESTIMONIALS
          </h3>
          <h1 className="text-xl font-bold text-gray-800">What They Say?</h1>
          <div
            className="flex flex-col md:flex-row gap-8 items-center w-full max-w-6xl"
            data-aos="fade-up"
          >
            {/* Text Section */}
            <div className="w-full md:w-2/3">
              <div className="bg-gray-100 mt-5">
                <p className="text-gray-600 text-sm mb-4">
                  We find the right customers for your business & the best
                  presentation for your office!!!
                </p>
                <p className="font-semibold text-gray-800">Abu Ahamed</p>
                <span className="text-sm text-gray-500">
                  CEO Of ALL ONE AUTOS
                </span>
              </div>
            </div>
          </div>
          <div className="p-3 rounded-full cursor-pointer">
            <MdKeyboardArrowUp className="text-gray-600 text-xl" />
          </div>
          <div className="p-3 rounded-full cursor-pointer">
            <MdOutlineKeyboardArrowDown className="text-gray-600 text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
