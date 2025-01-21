import { useState, useEffect } from "react";
import { Collapse } from "antd";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import "tailwindcss/tailwind.css";

const { Panel } = Collapse;

const faqData = [
  {
    question: "Why is accounting software important?",
    answer: "It helps manage a company's financial activity digitally and smoothly.",
  },
  {
    question: "What are the benefits of using accounting software?",
    answer: "Fast, error-free, simple to use, and cost-effective.",
  },
  {
    question: "What accounting software helps to do?",
    answer: "Prepares reports, tracks purchases, manages billing and invoices, and handles customer and vendor management.",
  },
  {
    question: "What are the types of financial software?",
    answer: "Spreadsheet, Custom Accounting Software, Commercially-available Software, ERP or Enterprise Resource Planning Software.",
  },
];

const FAQSection = () => {
  const [activeKey, setActiveKey] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container mx-auto w-full lg:w-8/12 px-6 py-12">
      <h2
        className="text-3xl font-bold text-center text-gray-800 mb-8"
      >
        Frequently Asked Questions
      </h2>
      <Collapse
        accordion
        activeKey={activeKey}
        onChange={(key) => setActiveKey(key)}
        className="bg-white shadow-md rounded-lg"
      >
        {faqData.map((faq, index) => (
          <Panel
            header={
              <div className="flex justify-between items-center text-lg font-medium">
                {faq.question}
                {activeKey.includes(index.toString()) ? (
                  <AiOutlineMinus className="text-xl text-indigo-600" />
                ) : (
                  <AiOutlinePlus className="text-xl text-indigo-600" />
                )}
              </div>
            }
            key={index.toString()}
            className="text-gray-700"
          >
            <p className="text-base leading-relaxed">{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQSection;
