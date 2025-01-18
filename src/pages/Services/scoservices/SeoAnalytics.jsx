import React from 'react';
import { FaGoogle, FaTag, FaMousePointer } from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';

const SeoAnalytics = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  const features = [
    {
      icon: <FaGoogle className="text-yellow-500 text-4xl" />,
      title: 'Google Analytics (GA)',
      items: ['Dashboards', 'Reporting', 'Ecommerce Tracking', 'Data Analysis'],
    },
    {
      icon: <FaTag className="text-blue-500 text-4xl" />,
      title: 'Google Tag Manager (GTM)',
      items: ['Tag Management', 'Event Tracking', 'Enhanced Performance', 'Added Flexibility'],
    },
    {
      icon: <FaMousePointer className="text-yellow-400 text-4xl" />,
      title: 'User Behavior Data',
      items: ['Live User Recordings', 'Heatmaps', 'Scroll Maps', 'User Feedback'],
    },
  ];

  return (
    <div className="bg-gray-50 p-6 md:p-12">
      <div
        className="text-center"
        data-aos="fade-up"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Analytics Implementation</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{feature.title}</h3>
            <ul className="text-gray-600 text-center space-y-2">
              {feature.items.map((item, idx) => (
                <li key={idx} className="text-sm">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeoAnalytics;
