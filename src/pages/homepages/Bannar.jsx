import { Carousel } from "antd";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Bannar1 from "../../assets/bannarimage001.jpg";
import Bannar2 from "../../assets/bannarimage01.jpg";
import Bannar3 from "../../assets/bannarimage6.jpg";
import Bannar4 from "../../assets/bannarimage05.jpg";
import Bannar5 from "../../assets/bannarimage1.jpg";
import Bannar6 from "../../assets/bannarimage3.jpg";
import Bannar7 from "../../assets/bannarimage2.jpg";
const Bannar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Easing function
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="text-black flex items-center justify-center">
      <div className="w-full h-screen">
        <Carousel autoplay className="h-full">
          {/* cart 1 */}
          <header className="">
            <div
              className="w-full bg-center bg-cover h-screen"
              style={{
                backgroundImage: `url(${Bannar1})`,
              }}
            >
              <div className="flex items-center pl-28 w-full h-full bg-gray-900/40">
                <div className="">
                  <h1 className="text-4xl font-semibold text-white lg:text-4xl font-mono">
                    Small Business Account Software
                  </h1>
                  <p className="text-white font-semibold text-base">
                    E office Management System Provide Expert Accounting
                    Software
                  </p>
                  <button className="w-full px-7 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors border duration-700 transform rounded hover:bg-white hover:text-black lg:w-auto">
                    CHECKOUT NOW
                  </button>
                </div>
              </div>
            </div>
          </header>
          {/* cart 2  */}
          <header className="">
            <div
              className="w-full bg-center bg-cover h-screen"
              style={{
                backgroundImage: `url(${Bannar2})`,
              }}
            >
              <div className="flex items-center pl-28 w-full h-full bg-gray-900/40">
                <div className="">
                  <h1 className="text-4xl font-semibold text-white lg:text-4xl font-mono">
                    Small Business Website Design
                  </h1>
                  <p className="text-white font-semibold text-base">
                    To all Small Business, We Provide Website Design &
                    Development Service
                  </p>
                  <button className="w-full px-7 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors border duration-700 transform rounded hover:bg-white hover:text-black lg:w-auto">
                    CHECKOUT NOW
                  </button>
                </div>
              </div>
            </div>
          </header>
          {/* cart 3  */}
          <header className="">
            <div
              className="w-full bg-center bg-cover h-screen"
              style={{
                backgroundImage: `url(${Bannar3})`,
              }}
            >
              <div className="flex items-center pl-28 w-full h-full bg-gray-900/40">
                <div className="">
                  <h1 className="text-4xl font-semibold text-white lg:text-4xl font-mono">
                    Web Devlopment Agency
                  </h1>
                  <p className="text-white font-semibold text-base">
                    Develop your web Application with Best Web Development
                    Agency
                    <br />E office Management System
                  </p>
                  <button className="w-full px-7 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors border duration-700 transform rounded hover:bg-white hover:text-black lg:w-auto">
                    CHECKOUT NOW
                  </button>
                </div>
              </div>
            </div>
          </header>
          {/* cart 4  */}
          <header className="">
            <div
              className="w-full bg-center bg-cover h-screen"
              style={{
                backgroundImage: `url(${Bannar4})`,
              }}
            >
              <div className="flex items-center pl-28 w-full h-full bg-gray-900/40">
                <div className="">
                  <h1 className="text-4xl font-semibold text-white lg:text-4xl font-mono">
                    Customer eCommerce Website <br /> Devlopment
                  </h1>
                  <p className="text-white font-semibold text-base">
                    E office Management System Provide Best eCommerce Website
                    Design Service
                  </p>
                  <button className="w-full px-7 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors border duration-700 transform rounded hover:bg-white hover:text-black lg:w-auto">
                    CHECKOUT NOW
                  </button>
                </div>
              </div>
            </div>
          </header>
          {/* cart 5  */}
          <header className="">
            <div
              className="w-full bg-center bg-cover h-screen"
              style={{
                backgroundImage: `url(${Bannar5})`,
              }}
            >
              <div className="flex items-center pl-28 w-full h-full bg-gray-900/40">
                <div className="">
                  <h1 className="text-4xl font-semibold text-white lg:text-4xl font-mono">
                    Digital Marketing Support
                  </h1>
                  <p className="text-white font-semibold text-base">
                    We will do Marketing & Remarketing with Paid and Free Tools
                  </p>
                  <button className="w-full px-7 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors border duration-700 transform rounded hover:bg-white hover:text-black lg:w-auto">
                    CHECKOUT NOW
                  </button>
                </div>
              </div>
            </div>
          </header>
          {/* cart 6  */}
          <header className="">
            <div
              className="w-full bg-center bg-cover h-screen"
              style={{
                backgroundImage: `url(${Bannar6})`,
              }}
            >
              <div className="flex items-center pl-28 w-full h-full bg-gray-900/40">
                <div className="">
                  <h1 className="text-4xl font-semibold text-white lg:text-4xl font-mono">
                    School Management Software
                  </h1>
                  <p className="text-white font-semibold text-base">
                    Manage Your student-teacher, Online Class Accounts Form One Software
                  </p>
                  <button className="w-full px-7 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors border duration-700 transform rounded hover:bg-white hover:text-black lg:w-auto">
                    CHECKOUT NOW
                  </button>
                </div>
              </div>
            </div>
          </header>
          {/* cart 7  */}
          <header className="">
            <div
              className="w-full bg-center bg-cover h-screen"
              style={{
                backgroundImage: `url(${Bannar7})`,
              }}
            >
              <div className="flex items-center pl-28 w-full h-full bg-gray-900/40">
                <div className="">
                  <h1 className="text-4xl font-semibold text-white lg:text-4xl font-mono">
                    Small Business Accounts Software
                  </h1>
                  <p className="text-white font-semibold text-base">
                    E office management System Provide Expert Accounting Software
                  </p>
                  <button className="w-full px-7 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors border duration-700 transform rounded hover:bg-white hover:text-black lg:w-auto">
                    CHECKOUT NOW
                  </button>
                </div>
              </div>
            </div>
          </header>
        </Carousel>
      </div>
    </div>
  );
};

export default Bannar;
