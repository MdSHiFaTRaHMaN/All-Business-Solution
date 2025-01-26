import AboutWebDev from "./AboutWebDev";
import AboutWork from "./AboutWork";
import BannarWebDev from "./BannarWebDev";
import FaqSection from "./FaqSection";
import MyExprience from "./MyExprience";
import WebDevProject from "./WebDevProject";
import WhyHireUs from "./WhyHireUs";

const WebdevPage = () => {
    return (
        <div>
            <BannarWebDev />
            <AboutWork />
            <MyExprience />
            <AboutWebDev />
            <WhyHireUs />
            <WebDevProject />
            <FaqSection />
        </div>
    );
};

export default WebdevPage;