import { FaRegCommentDots, FaRocket, FaCode } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

const EcommerceRole = () => {
  const features = [
    {
      icon: <FaRegCommentDots />,
      title: "Communicate",
      description:
        "Before starting, we need to know your needs. Talk to us, communicate about your goals, and let us help grow your business!",
    },
    {
      icon: <FaCode />,
      title: "Design & Development",
      description:
        "Our eCommerce design and development teams build your website, reviewing and revising until it meets your goals.",
    },
    {
      icon: <FaRocket />,
      title: "Launch",
      description:
        "As your eCommerce website goes live, our team will ensure it performs optimally with ongoing reviews and support.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Lets Develop <span className="text-blue-600">Ecommerce Website</span>
          </h2>
          <span className="h-[2px] w-[40px] bg-blue-800 inline-block my-4"></span>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our friendly eCommerce web consultants are here to help you
            understand your requirements, build on your ideas, and grow your
            business. Whether youre just starting or ready to expand, we’re
            here to offer expert support.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration={`${1000 + index * 200}`}
              className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg bg-white"
            >
              <div className="text-blue-600 text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <span className="h-[2px] w-[30px] bg-blue-800 inline-block mb-4"></span>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceRole;
