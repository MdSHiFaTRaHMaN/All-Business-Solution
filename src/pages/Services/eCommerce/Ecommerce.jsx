import AboutEcommerce from "./AboutEcommerce";
import ContactNum from "./ContactNum";
import EcommerceHeader from "./EcommerceHeader";
import EcommerceProject from "./EcommerceProject";
import EcommerceRole from "./EcommerceRole";
import Features from "./Features";
import MobileRespnsive from "./MobileRespnsive";
import PaymentGateway from "./PaymentGateway";
import Testimonials from "./TestimonialCard";

const Ecommerce = () => {
    return (
        <div>
            <EcommerceHeader />
            <AboutEcommerce />
            <Features />
            <EcommerceProject />
            <Testimonials />
            <MobileRespnsive />
            <EcommerceRole />
            <ContactNum />
            <PaymentGateway />
        </div>
    );
};

export default Ecommerce;