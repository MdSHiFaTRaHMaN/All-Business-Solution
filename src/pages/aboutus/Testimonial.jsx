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
      <div className="flex flex-col md:flex-row gap-5 items-center md:items-start w-full max-w-6xl">
        {/* Image Section */}
        <div className="w-full md:w-1/3">
          <img
            src={CEO}
            alt="Client"
            className="rounded object-cover shadow-lg w-full md:w-[300px]"
          />
        </div>

        {/* Text Section */}
        <div className="mb-12 w-full md:w-2/3" data-aos="fade-up">
          <h3 className="text-yellow-700 text-sm tracking-wider">TESTIMONIALS</h3>
          <h1 className="text-xl font-bold text-gray-800">What They Say?</h1>
          <div
            className="flex flex-col md:flex-row gap-8 items-center w-full"
            data-aos="fade-up"
          >
            {/* Text Content */}
            <div className="w-full md:w-2/3">
              <div className="bg-gray-100 mt-5 p-4 rounded-lg shadow-sm">
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

          {/* Arrows */}
          <div className="flex lg:grid gap-3 mt-4">
            <div className="p-3 rounded-full cursor-pointer transition">
              <MdKeyboardArrowUp className="text-gray-600 text-xl" />
            </div>
            <div className="p-3 rounded-full cursor-pointer transition">
              <MdOutlineKeyboardArrowDown className="text-gray-600 text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
