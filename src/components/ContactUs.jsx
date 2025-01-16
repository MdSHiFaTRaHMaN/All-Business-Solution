import React from "react";
import { Form, Input, Button } from "antd";
import { PhoneOutlined, MailOutlined, HomeOutlined } from "@ant-design/icons";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import "tailwindcss/tailwind.css";

const ContactUs = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


  // service_kjq2o8c

  // template_i8p6itg

  // biV3M_B_8H-hfEvNh


  return (
    <div className="bg-[#110940] text-white py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form Section */}
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <Form layout="vertical" className="space-y-4">
            <Form.Item
              label="Your Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input className="rounded-md py-3" placeholder="Your Name" />
            </Form.Item>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label="Your Phone Number"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number!",
                  },
                ]}
              >
                <Input className="rounded-md py-3" placeholder="Your Phone Number" />
              </Form.Item>
              <Form.Item
                label="Your Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email!",
                  },
                ]}
              >
                <Input className="rounded-md py-3" placeholder="Your Email" />
              </Form.Item>
            </div>
            <Form.Item
              label="Your Message"
              name="message"
              rules={[
                { required: true, message: "Please enter your message!" },
              ]}
            >
              <Input.TextArea
                className="rounded-md"
                rows={4}
                placeholder="Your Message"
              />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-5 rounded-md"
            >
              Contact Now
            </Button>
          </Form>
        </div>

        {/* Contact Info Section */}
        <div data-aos="fade-down" className="space-y-6">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <PhoneOutlined className="text-xl" />
              <span>+880 1724-683220</span>
            </div>
            <div className="flex items-center space-x-4">
              <MailOutlined className="text-xl" />
              <span>abs@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <HomeOutlined className="text-xl" />
              <span>Manda, Dhaka in Bangladesh.</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-xl">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
