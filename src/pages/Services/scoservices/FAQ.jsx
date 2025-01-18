import React from 'react';
import { Collapse } from 'antd';
import { FaQuestionCircle } from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';

const { Panel } = Collapse;

const FAQ = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  const faqs = [
    {
      question: 'Does your SEO work for all major search engines?',
      answer:
        'Yes! Our SEO team focuses on optimizing your website for all major search engines, including Google, Bing, Yahoo, Baidu, Yandex, Ask, and DuckDuckGo.',
    },
    {
      question: 'Can you optimize my Google Business Profile?',
      answer:
        'Definitely—our SEO team is well-versed in optimizing Google Business Profiles to help gain exposure in local search results and Google Maps.',
    },
    {
      question: 'How do I know which type of SEO I need?',
      answer:
        'The simplest way to figure out the right SEO approach is to talk with a qualified SEO expert who can tailor a long-term strategy for your business.',
    },
    {
      question: 'What is Ecommerce SEO?',
      answer:
        'Ecommerce SEO involves optimizing your site and products to increase visibility in search engine results, driving traffic and boosting conversions.',
    },
    {
      question: 'What is Technical SEO?',
      answer:
        'Technical SEO focuses on improving your website’s speed, crawlability, indexing, and user experience to enhance organic search performance.',
    },
    {
      question: 'Do you offer other search engine marketing services?',
      answer:
        'Yes, we provide web design, social media marketing, copywriting, PPC management, and comprehensive digital marketing strategies.',
    },
    {
      question: 'Could you give me some free SEO tips?',
      answer:
        'Yes, check out our blog for tips! For a personalized analysis, request our free SEO audit to understand what may be holding your site back.',
    },
    {
      question: 'Can you perform an SEO audit on my website?',
      answer:
        'Absolutely! We offer basic and advanced SEO audits to identify optimization opportunities and create effective strategies for improvement.',
    },
  ];

  return (
    <div
      className="faq-container mx-auto p-6 max-w-3xl bg-white"
      data-aos="fade-up"
    >
      <h2 className="text-2xl font-bold text-center mb-6 flex justify-center items-center text-blue-600">
        <FaQuestionCircle className="mr-2" />
        Frequently Asked Questions
      </h2>
      <Collapse accordion className='border-none'>
        {faqs.map((faq, index) => (
          <Panel
            header={<span className="text-lg font-medium">{faq.question}</span>}
            key={index}
            className="bg-gray-100 rounded-lg mb-2"
          >
            <p className="text-gray-700">{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQ;
