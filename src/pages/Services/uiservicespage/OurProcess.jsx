import React, { useEffect } from 'react';
import { Card } from 'antd';
import { AiOutlineSearch, AiOutlineUser, AiOutlineInteraction, AiOutlineFileText, AiOutlinePartition, AiOutlineNodeIndex, AiOutlineLayout, AiOutlineEye, AiOutlineAppstore } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';

const { Meta } = Card;

const OurProcess = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const steps = [
    { title: 'Research', description: 'This stage provides the team and the client with valuable information about the market, product, and audience.', icon: <AiOutlineSearch /> },
    { title: 'User portrait', description: 'We create a user portrait based on data extracted from the research.', icon: <AiOutlineUser /> },
    { title: 'CJM', description: 'A Customer Journey Map visualizes how users will interact with your application.', icon: <AiOutlineInteraction /> },
    { title: 'User Stories', description: 'User stories describe user actions and divide them into releases for clarity.', icon: <AiOutlineFileText /> },
    { title: 'Sitemap', description: 'Creating an informational structure based on user stories.', icon: <AiOutlinePartition /> },
    { title: 'User Flow', description: 'User flow illustrates the navigation paths users will take.', icon: <AiOutlineNodeIndex /> },
    { title: 'Wireframes', description: 'Wireframes give an understanding of how convenient the app will be.', icon: <AiOutlineLayout /> },
    { title: 'Visual Research', description: 'Analyzing competitor designs to build the best UI/UX.', icon: <AiOutlineEye /> },
    { title: 'UI Design', description: 'Final UI design with all components and usability testing.', icon: <AiOutlineAppstore /> },
  ];

  return (
    <div className="bg-gray-100 py-16 px-8 text-center">
      <h2 className="text-4xl font-bold mb-2">Our Process</h2>
      <p className="text-gray-500 mb-10 max-w-3xl mx-auto">
        Providing high-quality UI/UX design services is impossible without an established and well-structured process. Here’s how our process works:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <Card
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            bordered={false}
            className="shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 text-left p-4"
          >
            <div className="flex items-start">
              <div className="bg-yellow-400 text-white rounded-full p-3 text-xl mr-4">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;
