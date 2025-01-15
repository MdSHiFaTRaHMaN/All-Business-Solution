import { useEffect } from "react";
import { Card } from "antd";
import { AiOutlineCheckCircle } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const { Meta } = Card;

const ReasonDesign = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const reasons = [
    { id: "01", text: "You want to achieve your business goals faster" },
    { id: "02", text: "You want to address the user expectations" },
    { id: "03", text: "Your old solution needs to be updated" },
    { id: "04", text: "You need a third-party view of your project" },
    { id: "05", text: "You don’t have enough resources to research" },
    { id: "06", text: "You have no design team of your own" },
  ];

  return (
    <div className="w-full lg:w-10/12 mx-auto py-16 px-8 text-center">
      <h2 className="text-4xl font-bold mb-2">
        Reasons to hire a user interface designer
      </h2>
      <p className="text-gray-500 mb-10">
        Why may you need user interface design services?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <Card
            key={reason.id}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            bordered={false}
            className="flex items-start text-left shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <div className="flex">
              <div className="border-l-4 border-yellow-400 pr-4 mr-4"></div>
              <div>
                <h3 className="text-4xl font-bold text-black">{reason.id}</h3>
                <h4 className="text-gray-600 text-sm">{reason.text}</h4>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReasonDesign;
