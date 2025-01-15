import { useEffect } from 'react';
import { Card } from 'antd';
import { AiOutlineLaptop, AiOutlineMobile } from 'react-icons/ai';
import 'aos/dist/aos.css';
import AOS from 'aos';

const { Meta } = Card;

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-100 py-16 px-8 text-center">
      <h2 className="text-4xl font-bold mb-4">UX & UI design services we provide</h2>
      <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
        Successful UI/UX design is a result of mixing up art, technology, experience, strategy, and engineering. Here are the UI and UX services our team can assist you with.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <Card
          data-aos="fade-up"
          className="w-full md:w-1/3 shadow-lg"
          bordered={false}
        >
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 p-4 rounded-full mb-4">
              <AiOutlineLaptop className="text-3xl text-black" />
            </div>
            <Meta
              title={<span className="font-bold text-lg">Web app design</span>}
              description={
                <p className="text-gray-500 text-sm mt-2">
                  Creative and understandable website design significantly increases the chances of a visitor taking the target action we need. There must be no extra distractions that will influence the website navigation. The design’s role is to create a likable atmosphere for the selected product or service and encourage users to make a choice.
                </p>
              }
            />
          </div>
        </Card>
        <Card
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-full md:w-1/3 shadow-lg"
          bordered={false}
        >
          <div className="flex flex-col items-center">
            <div className="bg-yellow-400 p-4 rounded-full mb-4">
              <AiOutlineMobile className="text-3xl text-black" />
            </div>
            <Meta
              title={<span className="font-bold text-lg">Mobile app design</span>}
              description={
                <p className="text-gray-500 text-sm mt-2">
                  Mobile UX design defines the correct user flow of the app. How many actions will the user take to reach what they want? What additional features will they face on this path (read reviews, specifications, check photos, rate, watch ads)? How to combine all this and not confuse the user? Our team can answer these questions.
                </p>
              }
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Services;
