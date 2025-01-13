import { useEffect } from "react";
import { FaPaypal } from "react-icons/fa";
import { Card } from "antd";
import "aos/dist/aos.css";
import AOS from "aos";
import { SiFampay } from "react-icons/si";
import Payment from "../../../assets/payment.png";

const PaymentGateway = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex items-center justify-center py-10 bg-white mx-auto">
      <div>
        <h1 className="text-4xl font-bold mb-4">
          INTEGRATED <span className="text-blue-400">PAYMENT GATEWAY</span>
        </h1>
        <hr className="w-16 border-b-2 border-blue-400 mb-6" />
        <p className="text-gray-600 max-w-3xl mb-8">
          Payment Gateway enabled you to accept Credit card payments on your
          website. We have worked with various payment gateways including
          Paypal, Pay forte, Paytabs, Network Solutions, Cash on Delivery, etc.
          We have even handled tokenized payments for subscription payments.
        </p>
        <div className="flex gap-6" data-aos="fade-up">
          <Card className="flex items-center justify-center p-4 shadow-md hover:shadow-xl">
            <FaPaypal size={32} className="text-blue-600 mr-2" />
            <span className="text-lg font-medium">PayPal</span>
          </Card>
          <Card className="flex items-center justify-center p-4 shadow-md hover:shadow-xl">
            <SiFampay size={32} className="text-pink-600 mr-2" />
            <span className="text-lg font-medium">bKash</span>
          </Card>
          <Card className="flex items-center justify-center p-4 shadow-md hover:shadow-xl">
            <SiFampay size={32} className="text-purple-600 mr-2" />
            <span className="text-lg font-medium">Rocket</span>
          </Card>
          <Card className="flex items-center justify-center p-4 shadow-md hover:shadow-xl">
            <SiFampay size={32} className="text-green-600 mr-2" />
            <span className="text-lg font-medium">Payza</span>
          </Card>
        </div>
      </div>
      <div data-aos="fade-left" className="mt-10">
        <img src={Payment} alt="Payment Illustration" className="w-96" />
      </div>
    </div>
  );
};

export default PaymentGateway;
