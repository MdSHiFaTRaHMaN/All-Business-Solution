import Bannar from "../../assets/about.jpg";

const AboutBannar = () => {
  return (
    <div className="relative w-full h-[38rem]">
      {/* Background Image */}
      <img
        src={Bannar}
        alt="About Banner"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default AboutBannar;
