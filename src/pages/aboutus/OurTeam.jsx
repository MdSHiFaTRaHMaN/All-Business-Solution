import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nayon from "../../assets/nayon.png";
import Sakib from "../../assets/shakib.png";
import Kawsar from "../../assets/kawsar.png";
import Shifat from "../../assets/shifat.png";


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
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {/* nayon  */}
          <div className="flex flex-col items-center p-2 transition-all duration-300 transform bg-white border rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <img
              className="object-cover w-64 h-64 rounded bg-gray-100 border-2 border-gray-300"
              src={Nayon}
              alt="Profile Picture"
            />

            <h1 className="mt-2 text-2xl font-bold text-gray-800 capitalize group-hover:text-white">
              Nayon Coders
            </h1>

            <p className=" text-lg text-gray-600 capitalize group-hover:text-gray-200">
              Senior Flutter Developer
            </p>
          </div>

          {/* shakib  */}
          <div className="flex flex-col items-center p-2 transition-all duration-300 transform bg-white border rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <img
              className="object-cover w-64 h-64 rounded bg-gray-100 border-2 border-gray-300"
              src={Sakib}
              alt="Profile Picture"
            />

            <h1 className="mt-2 text-2xl font-bold text-gray-800 capitalize group-hover:text-white">
             Shakib KB
            </h1>

            <p className=" text-lg text-gray-600 capitalize group-hover:text-gray-200">
              Flutter Developer
            </p>
          </div>
          {/* kawsar  */}
          <div className="flex flex-col items-center p-2 transition-all duration-300 transform bg-white border rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <img
              className="object-cover w-64 h-64 rounded bg-gray-100 border-2 border-gray-300"
              src={Kawsar}
              alt="Profile Picture"
            />

            <h1 className="mt-2 text-2xl font-bold text-gray-800 capitalize group-hover:text-white">
            Md Kawsar Hasan 
            </h1>

            <p className=" text-lg text-gray-600 capitalize group-hover:text-gray-200">
            Full Stack Developer
            </p>
          </div>
          {/* shifat  */}
          <div className="flex flex-col items-center p-2 transition-all duration-300 transform bg-white border rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <img
              className="object-cover w-64 h-64 rounded bg-gray-100 border-2 border-gray-300"
              src={Shifat}
              alt="Profile Picture"
            />

            <h1 className="mt-2 text-2xl font-bold text-gray-800 capitalize group-hover:text-white">
              Md Shifat Rahman
            </h1>

            <p className=" text-lg text-gray-600 capitalize group-hover:text-gray-200">
              Font-end Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
