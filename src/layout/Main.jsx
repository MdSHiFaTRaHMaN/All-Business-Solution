import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import { Button, FloatButton, Input, Modal } from "antd";
import {
  CommentOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  PhoneTwoTone,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! How can we help you?", sender: "system" },
    { id: 2, text: "Feel free to type your message below.", sender: "system" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: newMessage, sender: "user" },
      ]);
      setNewMessage("");
    }
  };

  // লোডিং স্টেট
  const [isLoading, setIsLoading] = useState(true); // লোডিং স্টেট

  useEffect(() => {
    // লোডিং শেষ করার জন্য একটি টাইমার
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // ৩ সেকেন্ড

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cursor-default">
      {isLoading ? (
           <div className="flex items-center justify-center min-h-screen bg-gray-100">
           {/* কাস্টম লোডিং অ্যানিমেশন */}
           <div className="relative w-20 h-20">
             {/* বাইরের রিং */}
             <div className="absolute inset-0 w-full h-full border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          
             {/* লাইট ইফেক্ট */}
             <div className="absolute top-0 left-0 w-20 h-20 rounded-full border-t-4 border-blue-300 animate-pulse"></div>
           </div>
         </div>
      ) : (
        <div>
          <Navbar />
          <Outlet />
          <ContactUs />
          <Footer />
        </div>
      )}

      {/* Float Button */}
      <FloatButton.Group
        trigger="click"
        type="primary"
        className="fixed right-6 bottom-6 flex flex-col gap-2"
        icon={<HomeOutlined />}
      >
        <FloatButton
          className="bg-blue-500 hover:bg-blue-600 text-white"
          onClick={showModal}
          icon={<PhoneTwoTone />}
        />
        <FloatButton
          className="bg-blue-500 hover:bg-blue-600 text-white"
          icon={
            <span className="text-blue-700 hover:text-white">
              <CommentOutlined />
            </span>
          }
          onClick={toggleChat} // Open chat
        />
      </FloatButton.Group>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-[105px] right-5 md:right-10 bg-white w-72 md:w-96 h-96 shadow-lg rounded-lg flex flex-col">
          {/* Chat Header */}
          <div className="bg-green-500 text-white p-3 flex justify-between items-center rounded-t-lg">
            <h3 className="font-bold text-sm md:text-base">
              We are happy to chat.
            </h3>
            <span className="cursor-pointer text-xl" onClick={toggleChat}>
              &times;
            </span>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.length === 0 ? (
              <p className="text-center text-gray-500">No messages yet.</p>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`${
                    message.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block px-3 py-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-100 text-gray-800"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Chat Input */}
          <div className="p-3 border-t flex items-center space-x-2">
            <Input
              placeholder="Send your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onPressEnter={sendMessage}
              className="flex-1 rounded-md"
            />
            <Button
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md"
              onClick={sendMessage}
            >
              Send
            </Button>
          </div>
        </div>
      )}

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="fixed top-[180px] lg:top-[250px] right-2 md:right-10 lg:right-5"
      >
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
      </Modal>
    </div>
  );
};

export default Main;
