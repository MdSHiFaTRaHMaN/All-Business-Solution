import DigitalMarketing from "./DigitalMarketing";
import Header from "./Header";
import MarketingFaq from "./MarketingFaq";
import MarketingServices from "./MarketingServices";
import MarketingTools from "./MarketingTools";

const MarketingPage = () => {
    return (
        <div>
            <Header />
            <MarketingTools />
            <DigitalMarketing />
            <MarketingServices />
            <MarketingFaq />
        </div>
    );
};

export default MarketingPage;