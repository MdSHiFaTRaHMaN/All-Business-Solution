import { Collapse } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const { Panel } = Collapse;

const faqData = [
  {
    question: "How much does it cost to set up a website for a small business?",
    answer:
      "It varies from agencies to agencies. The cost of each website also depends on the requirement. On the underlying skeleton, if you want some more customization and options, you have to spend a bit more. Whatever the cost is, comparably, you will enjoy all the service at the lowest rate from EOMSBD.",
  },
  {
    question: "What does web development mean?",
    answer:
      "Web development means building a website and maintain or upgrading them properly.",
  },
  {
    question: "Is developing a single static page can call as web development?",
    answer:
      "If you develop only a single page or a beautiful website, both can call as web development.",
  },
  {
    question: "Is Web Development Hard?",
    answer:
      "Yes, it is quite hard. Also, even if you are a professional web developer, you have to keep learning many new things every day. But with patience and hard work, even if you are new in this sector, you can be good at it.",
  },
  {
    question: "Which are the popular language for web development?",
    answer: "",
  },
  {
    question: "Why do I need a web developer to develop my website?",
    answer:
      "Cause it may sound easy but developing a website is more challenging than you can imagine. So, if you want a good looking website, you will need a professional web developer.",
  },
  {
    question: "Why a good website necessary for a company?",
    answer:
      "Nowadays, people check reviews on the internet before taking anyone's services; if you have a website, it will create a good impression among them. Eventually, it will help your business grow.",
  },
  {
    question: "Why do i need a web developer to devlop my website ?",
    answer: "Cause it may sound easy but developing a website is more challenging than you can imagine. So, if you want a good looking website, you will need a professional web developer.",
  },
];

const FaqSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-50 py-16 px-5 lg:px-40">
      <h2
        className="text-3xl font-bold text-center text-gray-800 mb-10"
        data-aos="fade-up"
      >
        FAQ
      </h2>
      <Collapse
        accordion
        className="bg-white shadow-md rounded-md"
        expandIconPosition="end"
      >
        {faqData.map((item, index) => (
          <Panel
            header={
              <span className="text-md lg:text-lg  font-semibold text-gray-700">
                {item.question}
              </span>
            }
            key={index}
            className="border-b border-gray-200"
          >
            <p className="text-gray-600 text-base">{item.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FaqSection;
