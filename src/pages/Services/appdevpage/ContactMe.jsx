import { PhoneFilled } from "@ant-design/icons";
import Background from "../../../assets/Footer Bannar.png";
import MobileImage from "../../../assets/mobile.png";

const ContactMe = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 py-12">
      <div
        className="w-full bg-center bg-cover h-[30rem] sm:h-[35rem] lg:h-[32rem] rounded-lg flex items-center justify-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full bg-gray-900/60 rounded-lg p-8 sm:p-12 lg:p-16">
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Let <span className="text-red-600">Appnality Launch</span> Your
              Web <br className="hidden sm:block" /> and App Projects!
            </h1>
            <p className="text-white mt-4 text-sm sm:text-base">
              Are you ready to take your business online? Consult your project
              with us for free! At Appnality, we work closely with our top
              expert developers, guiding each step from conception to launch to
              ensure outstanding, high-performance websites for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">
              <a
                href="tel:+1 (833) 486-4328"
                className="w-full sm:w-auto px-8 py-3 text-sm sm:text-base font-semibold text-white bg-red-600 rounded-md hover:bg-red-500 transition-all"
              >
                <PhoneFilled /> {" "}
                Let's Talk
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 w-full mt-8 lg:mt-0 hidden lg:block">
            <img
              src={MobileImage}
              alt="Mobile Preview"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
