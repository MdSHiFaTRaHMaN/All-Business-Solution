import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nayon from "../../assets/nayon.png";
import Sakib from "../../assets/shakib.png";
import Kawsar from "../../assets/kawsar.png";
import Shifat from "../../assets/shifat.png";
import Abu from "../../assets/abuahamed.png";
import GirlAvatar from "../../assets/girl image.jpeg";
import BoyAvatar from "../../assets/boyavatar.jpeg";
import Girl from "../../assets/girl avatar.jpeg";

const OurTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white">
      <div className="container px-6 py-8 w-full lg:w-10/12 mx-auto">
        {/* Header Section */}
        <div data-aos="fade-up">
          <p className="text-yellow-700 text-center">Meet Our Team.</p>
          <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
            Best Our Team
          </h2>
        </div>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4"
        >
          {/* abu ahamed  */}
          <div className="flex flex-col items-center p-2 transition-all duration-300 transform bg-white border rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <img
              className="object-cover w-64 h-64 rounded bg-gray-100 border-2 border-gray-300"
              src={Abu}
              alt="Profile Picture"
            />

            <h1 className="mt-5 text-md font-semibold text-gray-800 capitalize group-hover:text-white">
              Abu Ahamed
            </h1>

            <p className=" text-sm text-gray-600  capitalize group-hover:text-gray-200">
              CEO
            </p>
          </div>
          {/* nayon  */}
          <div className="flex flex-col items-center p-2 transition-all duration-300 transform bg-white border rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <img
              className="object-cover w-64 h-64 rounded bg-gray-100 border-2 border-gray-300"
              src={Nayon}
              alt="Profile Picture"
            />

            <h1 className="mt-5 text-md font-semibold text-gray-800 capitalize group-hover:text-white">
              Nayon Coders
            </h1>

            <p className=" text-sm text-gray-600 capitalize group-hover:text-gray-200">
              CO, Senior Software Engineer
            </p>
          </div>
          {/* kawsar  */}
          <div className="flex flex-col items-center p-2 transition-all duration-300 transform bg-white border rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <img
              className="object-cover w-64 h-64 rounded bg-gray-100 border-2 border-gray-300"
              src={Kawsar}
              alt="Profile Picture"
            />

            <h1 className="mt-5 text-md font-semibold text-gray-800 capitalize group-hover:text-white">
              Md Kawsar Hasan
            </h1>

            <p className=" text-sm text-gray-600 capitalize group-hover:text-gray-200">
              Senior Full Stack Developer
            </p>
          </div>
          {/* shakib  */}
          <div className="flex flex-col items-center p-2 transition-all duration-300 transform bg-white border rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <img
              className="object-cover w-64 h-64 rounded bg-gray-100 border-2 border-gray-300"
              src={Sakib}
              alt="Profile Picture"
            />

            <h1 className="mt-5 text-md font-semibold text-gray-800 capitalize group-hover:text-white">
              Shakib KB
            </h1>

            <p className=" text-sm text-gray-600 capitalize group-hover:text-gray-200">
              Flutter App Developer
            </p>
          </div>

          {/* shifat  */}
          <div className="flex flex-col items-center p-2 transition-all duration-300 transform bg-white border rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <img
              className="object-cover w-64 h-64 rounded bg-gray-100 border-2 border-gray-300"
              src={Shifat}
              alt="Profile Picture"
            />

            <h1 className="mt-5 text-md font-semibold text-gray-800 capitalize group-hover:text-white">
              Md Shifat Rahman
            </h1>

            <p className=" text-sm text-gray-600 capitalize group-hover:text-gray-200">
              ⁠Front-end Engineer
            </p>
          </div>
          {/* ⁠Liam Carter  */}
          <div className="flex flex-col items-center p-2 transition-all duration-300 transform bg-white border rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <img
              className="object-cover w-64 h-64 rounded bg-gray-100 border-2 border-gray-300"
              src={GirlAvatar}
              alt="Profile Picture"
            />

            <h1 className="mt-5 text-md font-semibold text-gray-800 capitalize group-hover:text-white">
              ⁠Liam Carter
            </h1>

            <p className=" text-sm text-gray-600 capitalize group-hover:text-gray-200">
              Full stack Developer
            </p>
          </div>
          {/* Noah Patel  */}
          <div className="flex flex-col items-center p-2 transition-all duration-300 transform bg-white border rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <img
              className="object-cover w-64 h-64 rounded bg-gray-100 border-2 border-gray-300"
              src={BoyAvatar}
              alt="Profile Picture"
            />

            <h1 className="mt-5 text-md font-semibold text-gray-800 capitalize group-hover:text-white">
            Noah Patel
            </h1>

            <p className=" text-sm text-gray-600 capitalize group-hover:text-gray-200">
            Backend engineer
            </p>
          </div>
          {/* Hassan Ali  */}
          <div className="flex flex-col items-center p-2 transition-all duration-300 transform bg-white border rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <img
              className="object-cover w-64 h-64 rounded bg-gray-100 border-2 border-gray-300"
              src={BoyAvatar}
              alt="Profile Picture"
            />

            <h1 className="mt-5 text-md font-semibold text-gray-800 capitalize group-hover:text-white">
            Hassan Ali
            </h1>

            <p className=" text-sm text-gray-600 capitalize group-hover:text-gray-200">
            UI/UX Designer & Product Designer
            </p>
          </div>
          {/* Emma Johnson  */}
          <div className="flex flex-col items-center p-2 transition-all duration-300 transform bg-white border rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <img
              className="object-cover w-64 h-64 rounded bg-gray-100 border-2 border-gray-300"
              src={Girl}
              alt="Profile Picture"
            />

            <h1 className="mt-5 text-md font-semibold text-gray-800 capitalize group-hover:text-white">
            Emma Johnson
            </h1>

            <p className=" text-sm text-gray-600 capitalize group-hover:text-gray-200">
            Product Designer
            </p>
          </div>
          {/*Nurul Hassan  */}
          <div className="flex flex-col items-center p-2 transition-all duration-300 transform bg-white border rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <img
              className="object-cover w-64 h-64 rounded bg-gray-100 border-2 border-gray-300"
              src={BoyAvatar}
              alt="Profile Picture"
            />

            <h1 className="mt-5 text-md font-semibold text-gray-800 capitalize group-hover:text-white">
            Nurul Hassan
            </h1>

            <p className=" text-sm text-gray-600 capitalize group-hover:text-gray-200">
            Content and SEO Strategist
            </p>
          </div>
          {/*Farah Khan  */}
          <div className="flex flex-col items-center p-2 transition-all duration-300 transform bg-white border rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <img
              className="object-cover w-64 h-64 rounded bg-gray-100 border-2 border-gray-300"
              src={BoyAvatar}
              alt="Profile Picture"
            />

            <h1 className="mt-5 text-md font-semibold text-gray-800 capitalize group-hover:text-white">
            Farah Khan
            </h1>

            <p className=" text-sm text-gray-600 capitalize group-hover:text-gray-200">
            Social Media and Digital Ads Expert
            </p>
          </div>
          {/*Sunil Sharma  */}
          <div className="flex flex-col items-center p-2 transition-all duration-300 transform bg-white border rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <img
              className="object-cover w-64 h-64 rounded bg-gray-100 border-2 border-gray-300"
              src={BoyAvatar}
              alt="Profile Picture"
            />

            <h1 className="mt-5 text-md font-semibold text-gray-800 capitalize group-hover:text-white">
            Sunil Sharma
            </h1>

            <p className=" text-sm text-gray-600 capitalize group-hover:text-gray-200">
            Local SEO Expert
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
