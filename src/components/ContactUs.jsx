import React from "react";
import { Form, Input, Button, message } from "antd";
import { PhoneOutlined, MailOutlined, HomeOutlined } from "@ant-design/icons";
import Aos from "aos";
import "aos/dist/aos.css";
import "tailwindcss/tailwind.css";
import emailjs from "emailjs-com";
import { AiFillGithub } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

const ContactUs = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const onFinish = (values) => {
    const { name, phone, email, message: userMessage } = values;

    const templateParams = {
      name,
      phone,
      email,
      message: userMessage,
    };

    emailjs
      .send(
        "service_j0uxm7t",
        "template_ondxgmp",
        templateParams,
        "kEZeAbx0kRXN0azu5"
      )
      .then(
        (result) => {
          message.success("Your message has been sent successfully!");
        },
        (error) => {
          message.error("Failed to send your message. Please try again later.");
        }
      );
  };

  return (
    <div className="bg-[#110940] text-white py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form Section */}
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <Form layout="vertical" className="space-y-4" onFinish={onFinish}>
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
                <Input
                  className="rounded-md py-3"
                  placeholder="Your Phone Number"
                />
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
              <span>+1 (833) 486-4328</span>
            </div>
            <div className="flex items-center space-x-4">
              <MailOutlined className="text-xl" />
              <span>allbussinesssoluition@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <HomeOutlined className="text-xl" />
              <span >255 Kingston AveBrooklyn NY 11213</span>
            </div>
          </div>

          {/* Social Media Icons */}
          {/* <div className="flex mt-6 sm:mt-0 gap-4 text-lg">
            <a className="text-gray-200 hover:text-blue-600">
              <AiFillGithub className="w-6 h-6" />
            </a>
            <a className="text-gray-200 hover:text-blue-400">
              <CiLinkedin className="w-6 h-6" />
            </a>
            <a className="text-gray-200 hover:text-pink-500">
              <SiUpwork className="w-6 h-6" />
            </a>
            <a className="text-gray-200 hover:text-green-600">
              <TbBrandFiverr className="w-6 h-6" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
