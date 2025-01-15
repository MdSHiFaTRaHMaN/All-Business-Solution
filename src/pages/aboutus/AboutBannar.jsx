import Bannar from "../../assets/about.jpg";

const AboutBannar = () => {
  return (
    <div className="relative w-full h-[28rem] sm:h-[32rem] md:h-[38rem] lg:h-[42rem]">
      {/* Background Image */}
      <img
        src={Bannar}
        alt="About Banner"
        className="object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md">
            About Our Company
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200">
            Discover our journey, values, and what makes us stand out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBannar;
