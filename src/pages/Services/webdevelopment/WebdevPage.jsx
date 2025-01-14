import AboutWebDev from "./AboutWebDev";
import AboutWork from "./AboutWork";
import BannarWebDev from "./BannarWebDev";
import WebDevProject from "./WebDevProject";

const WebdevPage = () => {
    return (
        <div>
            <BannarWebDev />
            <AboutWork />
            <AboutWebDev />
            <WebDevProject />
        </div>
    );
};

export default WebdevPage;