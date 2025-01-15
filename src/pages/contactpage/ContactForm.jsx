import { useEffect } from "react";
import { FaFacebookF, FaWhatsapp, FaSkype } from "react-icons/fa";
import { Input, Button } from "antd";
import "aos/dist/aos.css";
import AOS from "aos";

const ContactForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="w-full lg:w-8/12 mx-auto rounded-lg space-y-6" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Office Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#B7986F]">OUR OFFICE</h3>
            <p className="text-sm text-gray-600">
              Block-12, Green Model Town <br />
              Manda, Dhaka, Bangladesh
            </p>
          </div>
          {/* Call Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#B7986F]">CALL US</h3>
            <p className="text-sm text-gray-600">+880 1784 22 22 55</p>
          </div>
          {/* Email Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#B7986F]">MAIL US</h3>
            <p className="text-sm text-gray-600">software@agency.com</p>
          </div>
          {/* Social Media */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#B7986F]">FOLLOW US</h3>
            <div className="flex space-x-4 text-gray-600">
              <FaFacebookF className="text-xl hover:text-blue-600 cursor-pointer" />
              <FaWhatsapp className="text-xl hover:text-green-500 cursor-pointer" />
              <FaSkype className="text-xl hover:text-blue-500 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input placeholder="Name" className="p-3 border border-gray-500 rounded focus:ring-2 focus:ring-green-500" />
            <Input placeholder="Email" className="p-3 border border-gray-500 rounded focus:ring-2 focus:ring-green-500" />
            <Input placeholder="Phone Number" className="p-3 border border-gray-500 rounded focus:ring-2 focus:ring-green-500" />
          </div>
          <Input placeholder="Subject" className="p-3 border rounded border-gray-500 focus:ring-2 focus:ring-green-500" />
          <Input.TextArea placeholder="Message" rows={4} className="p-3 border border-gray-500 rounded focus:ring-2 focus:ring-green-500" />
          <Button className="w-full py-5 text-white bg-green-600 rounded hover:bg-green-700" data-aos="zoom-in">
            SEND MESSAGE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
