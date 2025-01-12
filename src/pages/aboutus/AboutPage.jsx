import AboutBannar from "./AboutBannar";
import AboutCompany from "./AboutCompany";
import CreativeWork from "./CreativeWork";
import HeaderAbout from "./HeaderAbout";
import OurMission from "./OurMission";
import OurTeam from "./OurTeam";
import Testimonial from "./Testimonial";

const AboutPage = () => {
  return (
    <div>
      <HeaderAbout />
      <AboutCompany />
      <AboutBannar />
      <CreativeWork />
      <Testimonial />
      <OurTeam />
      <OurMission />
    </div>
  );
};

export default AboutPage;
