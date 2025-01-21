import "aos/dist/aos.css";
import "tailwindcss/tailwind.css";
import MobileBannar1 from "../../../assets/appbannar1.png";
import AppMobile1 from "../../../assets/appbannarmain1.png";
import MobileBannar2 from "../../../assets/appmobilebannar2.jpg";
import AppMobile2 from "../../../assets/mobileapp222.png";
import MobileBannar3 from "../../../assets/mobileappbannar3.jpg";
import AppMobile3 from "../../../assets/mobileapp3.png";
import MobileBannar4 from "../../../assets/mobileapp44.jpg";
import AppMobile5 from "../../../assets/mobileapp5.jpg";

const Portfolio = () => {
  return (
    <div className="container mx-auto">
      <section className=" body-font">
        <h1 className="text-center text-3xl font-semibold">
          <span className="text-red-700 font-bold">Mobile App</span> Development
          Portfolio
        </h1>
        <div className="container mx-auto flex flex-wrap">
          <div className="lg:w-10/12 mx-auto p-5">
            {/* First Row */}
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="relative w-full lg:w-1/3 bg-gray-100 rounded-tl-lg flex items-center justify-center">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover opacity-65 rounded-tl-lg"
                  src={MobileBannar1}
                />
                <div className="relative z-10">
                  <img src={AppMobile1} alt="App 1" className="w-2/3 mx-auto" />
                </div>
              </div>
              <div className="relative w-full lg:w-2/3 bg-gray-100 rounded-tr-lg flex items-center justify-center">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover opacity-75 rounded-tr-lg"
                  src={MobileBannar2}
                />
                <div className="relative z-100 opacity-100">
                  <img src={AppMobile2} alt="App 2" className="w-3/4 mx-auto" />
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col md:flex-row -mx-2 mt-6">
              <div className="px-2 w-full md:w-1/3">
                <div className="relative bg-gray-100 p-6 sm:p-10 rounded-bl-lg">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover opacity-65 rounded-bl-lg"
                    src={MobileBannar3}
                  />
                  <div className="relative z-10">
                    <img
                      src={AppMobile3}
                      alt="App 3"
                      className="w-2/3 mx-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="px-2 w-full md:w-1/3 my-3 lg:my-0">
                <div className="relative bg-gray-100 py-[70px] sm:py-24 px-6 sm:p-10">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover opacity-100"
                    src={MobileBannar4}
                  />
                  <div className="relative z-10 py-5 "></div>
                </div>
              </div>
              <div className="px-2 w-full md:w-1/3">
                <div className="relative bg-gray-100 py-11 sm:py-24 px-6 sm:px-10 rounded-br-lg">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover opacity-100 rounded-br-lg"
                    src={AppMobile5}
                  />
                  <div className="relative z-10 py-8 lg:py-5 w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
