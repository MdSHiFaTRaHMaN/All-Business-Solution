import { useEffect } from "react";
import { FaFacebookF, FaWhatsapp, FaSkype } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import { Input, Button, message, Form } from "antd";
import emailjs from "emailjs-com";

const ContactForm = () => {
  useEffect(() => {
    AOS.init();
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
        "service_j0uxm7t", // Replace with your EmailJS service ID
        "template_ondxgmp", // Replace with your EmailJS template ID
        templateParams,
        "kEZeAbx0kRXN0azu5" // Replace with your EmailJS public key
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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div
        className="w-full lg:w-8/12 mx-auto rounded-lg space-y-6"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Office Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#B7986F]">OUR OFFICE</h3>
            <p className="text-sm">
              Block-12, Green Model Town <br />
              Manda, Dhaka, Bangladesh
            </p>
          </div>
          {/* Call Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#B7986F]">CALL US</h3>
            <p className="text-sm ">+1 (833) 486-4328</p>
          </div>
          {/* Email Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#B7986F]">MAIL US</h3>
            <p className="text-sm">allbussinesssoluition@gmail.com</p>
          </div>
          {/* Social Media */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#B7986F]">FOLLOW US</h3>
            <div className="flex space-x-4">
              <FaFacebookF className="text-xl hover:text-blue-600 cursor-pointer" />
              <FaWhatsapp className="text-xl hover:text-green-500 cursor-pointer" />
              <FaSkype className="text-xl hover:text-blue-500 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* contact form  */}

        <div
          data-aos="fade-up"
          className="max-w-3xl mx-auto p-6"
        >
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
            Contact Us
          </h2>
          <Form layout="vertical" className="space-y-4" onFinish={onFinish}>
            <Form.Item
              label={<span className="text-black">Your Name</span>} // কালো রঙ
              name="name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input
                className="rounded-md py-3 shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </Form.Item>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span className="text-black">Your Phone Number</span>}
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number!",
                  },
                ]}
              >
                <Input
                  className="rounded-md py-3 shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Phone Number"
                />
              </Form.Item>
              <Form.Item
                label={<span className="text-black">Your Email</span>}
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email!",
                  },
                ]}
              >
                <Input
                  className="rounded-md py-3 shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </Form.Item>
            </div>
            <Form.Item
              label={<span className="text-black">Your Message</span>}
              name="message"
              rules={[
                { required: true, message: "Please enter your message!" },
              ]}
            >
              <Input.TextArea
                className="rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Your Message"
              />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-5 rounded-md w-full mt-4 transition duration-300"
            >
              Contact Now
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
