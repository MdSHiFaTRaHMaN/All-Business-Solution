import AboutUs from "./AboutUs";
import ContactMe from "./ContactMe";
import FAQSection from "./FAQSection";
import Header from "./Header";
import MobileApp from "./MobileApp";
import Portfolio from "./Portfolio";

const AppDevPage = () => {
    return (
        <div>
            <Header />
            <AboutUs />
            <MobileApp />
            <Portfolio />
            <ContactMe />
            <FAQSection />
        </div>
    );
};

export default AppDevPage;