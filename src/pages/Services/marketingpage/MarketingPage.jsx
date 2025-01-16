import DigitalMarketing from "./DigitalMarketing";
import Header from "./Header";
import MarketingFaq from "./MarketingFaq";
import MarketingTools from "./MarketingTools";

const MarketingPage = () => {
    return (
        <div>
            <Header />
            <MarketingTools />
            <DigitalMarketing />
            <MarketingFaq />
        </div>
    );
};

export default MarketingPage;