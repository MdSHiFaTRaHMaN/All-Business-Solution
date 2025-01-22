import { FaCode, FaGlobe, FaLaptopCode } from "react-icons/fa";
import WebIMG from "../../../assets/webdevbannar.png";
import WorkingProcess from "../../../assets/WorkingProcessweb.png";
import MyExprience from "./MyExprience";

const AboutWebDev = () => {
  const metrics = [
    {
      id: 1,
      value: "06+",
      label: "Years of Experience",
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      id: 2,
      value: "150+",
      label: "Apps Developed",
      bgColor: "bg-red-500",
      textColor: "text-white",
    },
    {
      id: 4,
      value: "90%",
      label: "Client Retention Rate",
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      id: 5,
      value: "100%",
      label: "Projects Delivered",
      bgColor: "bg-red-500",
      textColor: "text-white",
    },
    {
      id: 6,
      value: "175+",
      label: "Employees",
      bgColor: "bg-black",
      textColor: "text-white",
    },
  ];
  return (
    <div className="w-full lg:w-9/12 mx-auto px-5">
      <h1 className="text-center text-4xl font-semibold text-[#AF986F]">
        Web Development Agency or Company
      </h1>
      <img src={WebIMG} alt="" className=" my-7" />
      <p className="text-lg">
        <span className="font-bold">
          Welcome to the ABS (All Business Soluition)
        </span>{" "}
        - one of the best software development companies in Bangladesh. If
        you're serious about doing business online through Software or
        specifically Website, we'll be the best and final solution for you. As
        ABS, our core activity is web design and development on customer
        requirements. But for the past few years, we have also gathered some
        quality expertise on business software and provided it to our respective
        Clients. Such as HR software, Accounting software, Point of sales
        software, Inventory Management Software, school management software, and
        so on. And especially, <span className="font-bold">ERP solution </span>
        is one of a big project that we're currently working with and serving.
        Besides these, we've also quality expert team members who develop
        applications for mobile or mobile websites.
      </p>
      <p className="text-lg">
        So, if you need a web development agency or company to do your job, then
        <span className="font-bold"> ABS</span> is the right one for you. Or
        more accurately, if you need your
        <span className="font-bold">
          Web Page design, Website design, Website development, eCommerce
          Website
        </span>
        , then
        <span className="font-bold"> ABS</span> is a perfect one for your
        standards. And most importantly, we're well capable of developing any
        website that you like.
      </p>
      <p className="text-lg">
        Now I think you understand who we are but, here a question arises "Why
        would you choose us" Right? Ok then, we're going to show you the list of
        our strong expertise or What are we good at to choose us -
      </p>
      <div className="flex flex-wrap justify-center gap-6 cursor-pointer p-6">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className={`w-40 h-32 flex flex-col justify-center items-center rounded-lg shadow-lg ${metric.bgColor} ${metric.textColor}`}
            data-aos="fade-up"
            data-aos-delay={`${metric.id * 100}`}
            data-aos-duration="800"
          >
            <h2 className="text-3xl font-bold">{metric.value}</h2>
            <p className="text-center mt-2 text-sm">{metric.label}</p>
          </div>
        ))}
      </div>
      <div className="my-5">
        <h1 className="text-3xl font-semibold text-center">
          Our Working Process
        </h1>
        <img src={WorkingProcess} alt="" />
      </div>

      <h2 className="text-3xl font-bold text-center text-[#AF986F] mb-6">
        Why Would You Choose Us?
      </h2>

      <p className="text-lg text-gray-700 text-center mb-8">
        There are lots of reasons to pick us as your dream maker, but here is
        some important information about us (e-commerce website development
        agency) you should know.
      </p>

      {/* Strong Expertise Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 flex items-center mb-4">
          <FaLaptopCode className="text-[#AF986F] mr-2" /> Strong Expertise
        </h3>
        <p className="text-gray-700 mb-4">
          So, here is the list of which we're positively skilled in:
        </p>
        <MyExprience />
      </div>

      {/* Digital Marketing Expertise */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 flex items-center mb-4">
          <FaGlobe className="text-[#AF986F] mr-2" /> Digital Marketing
          Expertise
        </h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Facebook marketing with advanced targeting and remarketing</li>
          <li>Google marketing with advanced targeting and remarketing</li>
        </ul>
      </div>

      {/* Experience Section */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 flex items-center mb-4">
          <FaCode className="text-[#AF986F] mr-2" /> 9 Years of Experience
        </h3>
        <p className="text-gray-700">
          We’ve collected a vast amount of experience (9 years) working with
          clients both officially and virtually. We have worked internationally
          and locally, ensuring that your dream project will be completed on
          time with perfection.
        </p>
      </div>
    </div>
  );
};

export default AboutWebDev;
