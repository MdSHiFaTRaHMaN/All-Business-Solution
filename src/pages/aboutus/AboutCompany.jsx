import AboutImg from "../../assets/about2.jpeg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutCompany = () => {
    useEffect(() => {
      AOS.init({ duration: 1000, once: false });
    }, []);
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
      value: "50+",
      label: "Apps Developed",
      bgColor: "bg-red-500",
      textColor: "text-white",
    },
    {
      id: 3,
      value: "12+",
      label: "Countries",
      bgColor: "bg-black",
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
      value: "30+",
      label: "Employees",
      bgColor: "bg-black",
      textColor: "text-white",
    },
  ];

  return (
    <div className="w-full lg:w-10/12 mx-auto p-5">
    
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
      <div className="text-center mt-7">
        <span className="text-sm text-yellow-700">KNOW US BETTER</span>
        <h1 className="text-3xl font-semibold">About Us</h1>
      </div>
      <div className="grid lg:flex justify-between gap-7 mt-10">
        <div className="">
          <p className=" leading-relaxed">
            We are ABS. We put our skilled resources with the supervision of
            ardit leader to ensure that you get your desirable service(s). Thus,
            we offer a comprehensive range of managed ICT enabled services.
            Whether you’re looking for professional custom software development,
            desktop/web development, mobile app development or software testing
            services you've found the right company and that is ABS bd.
          </p>
          <p className="leading-relaxed">
            At ABS bd, we have always put our client first. This idea permeates
            our culture to its core. It has driven us to create the innovative
            products and services we offer today. As a result, we enable our
            clients to put their people first-helping them build the
            people-centric environments they need to grow and meet their
            business goals.
          </p>
          <p className="my-6 leading-relaxed">
            We believe software should work for people. Not the other way
            around. Customers choose us for our sophisticated people management
            technology delivered in the cloud. But we know that it's the
            results-how well we improve the personal work experience for you and
            your employees-that matter most.
          </p>
          <p className="leading-relaxed">
            We execute every project with persistent accountability. We listen
            to your goals. We develop strategies based on your business. We
            track our performance. We do everything we can to earn your trust
            and build great lasting relationships.
          </p>
        </div>
        <img src={AboutImg} alt="about-image" width={480} className="h-[300px] lg:h-[450px]" />
      </div>
    </div>
  );
};

export default AboutCompany;
