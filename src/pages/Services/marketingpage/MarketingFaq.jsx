import React, { useState } from "react";
import { Collapse } from "antd";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "aos/dist/aos.css";
import AOS from "aos";

const { Panel } = Collapse;

const MarketingFaq = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleKey = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  // Initialize AOS
  React.useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const faqData = [
    {
      question: "What services do digital marketing agencies like EOMBD provide?",
      answer:
        "Digital marketing agencies like EOMBD provide a range of services, including SEO, social media marketing, pay-per-click advertising, email marketing, content creation, web design, and analytics to help businesses grow their online presence.",
      key: 1,
    },
    {
      question: "What's the pricing model in digital marketing?",
      answer:
        "Pricing models in digital marketing vary based on services and agencies. Common models include hourly rates, monthly retainers, project-based pricing, or performance-based pricing where costs are tied to results achieved.",
      key: 2,
    },
    {
      question: "What's SEO, Keywords and PPC?",
      answer:
        "SEO (Search Engine Optimization) improves website visibility in organic search results. Keywords are specific terms users search for online. PPC (Pay-Per-Click) is a paid advertising model where advertisers pay for each click on their ad.",
      key: 3,
    },
    {
      question: "Why is online media important?",
      answer:
        "Online media is essential because it allows businesses to reach a wider audience, engage directly with customers, and build brand awareness. It also provides measurable results and insights for improving marketing strategies.",
      key: 4,
    },
    {
      question: "How long will it take to get results?",
      answer:
        "The time to see results in digital marketing varies. For example, SEO can take 3-6 months, while PPC campaigns or social media ads can generate results within days. Consistent effort and strategy are key.",
      key: 5,
    },
    {
      question: "What is the purpose of digital marketing?",
      answer:
        "The purpose of digital marketing is to connect businesses with their target audience online, increase brand visibility, drive traffic, generate leads, and ultimately boost sales and conversions.",
      key: 6,
    },
    {
      question: "Is Digital Marketing Easy to do?",
      answer:
        "Digital marketing requires learning and practice. While basic tasks like social media posting can be simple, strategies like SEO, analytics, or PPC campaigns may require expertise and tools for success.",
      key: 7,
    },
    {
      question: "Is digital marketing useful for small businesses?",
      answer:
        "Yes, digital marketing is especially useful for small businesses. It helps them compete with larger brands by targeting specific audiences, building online credibility, and using cost-effective strategies like social media and email marketing.",
      key: 8,
    },
    {
      question: "Can I learn digital marketing?",
      answer:
        "Absolutely! Digital marketing can be learned through online courses, tutorials, and hands-on practice. Many free and paid resources are available to help you get started and master various aspects of digital marketing.",
      key: 9,
    },
  ];
  
  return (
    <div className="w-full max-w-4xl mx-auto p-6" data-aos="fade-up">
      <h2 className="text-center text-3xl font-bold mb-8">FAQ</h2>
      <Collapse
        accordion
        activeKey={activeKey}
        onChange={toggleKey}
        expandIcon={({ isActive }) =>
          isActive ? (
            <AiOutlineMinus className="text-blue-500" />
          ) : (
            <AiOutlinePlus className="text-blue-500" />
          )
        }
        className="bg-white border-none"
      >
        {faqData.map((faq) => (
          <Panel
            header={<span className="text-md lg:text-lg font-medium">{faq.question}</span>}
            key={faq.key}
            className="bg-gray-100 hover:bg-gray-50 my-5"
          >
            <p className="text-gray-600">
              {faq.answer}
            </p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default MarketingFaq;
