const AboutCompany = () => {
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
      value: "175+",
      label: "Employees",
      bgColor: "bg-black",
      textColor: "text-white",
    },
  ];

  return (
    <div className="w-full lg:w-10/12 mx-auto p-5">
      <div className="text-center">
        <span className="text-sm text-yellow-700">KNOW US BETTER</span>
        <h1 className="text-3xl font-semibold">About Us</h1>
      </div>
      <div className="mt-7">
        <p className="my-6">
          We are eomd bd. We put our skilled resources with the supervision of
          ardit leader to ensure that you get your desirable service(s). Thus,
          we offer a comprehensive range of managed ICT enabled services.
          Whether you’re looking for professional custom software development,
          desktop/web development, mobile app development or software testing
          services you've found the right company and that is ABS bd.
        </p>
        <p>
          At ABS bd, we have always put our client first. This idea permeates
          our culture to its core. It has driven us to create the innovative
          products and services we offer today. As a result, we enable our
          clients to put their people first-helping them build the
          people-centric environments they need to grow and meet their business
          goals.
        </p>
        <p className="my-6">
          We believe software should work for people. Not the other way around.
          Customers choose us for our sophisticated people management technology
          delivered in the cloud. But we know that it's the results-how well we
          improve the personal work experience for you and your employees-that
          matter most.
        </p>
        <p>
          We execute every project with persistent accountability. We listen to
          your goals. We develop strategies based on your business. We track our
          performance. We do everything we can to earn your trust and build
          great lasting relationships.
        </p>
      </div>
      {/* <div className="flex flex-wrap gap-7 justify-center my-7">
        <div className="flex">
          <span>+</span>
          <h1 className="text-5xl text-yellow-800">05</h1>
          <h4>
            Years <br /> Experience
          </h4>
        </div>
        <div className="flex">
          <span>+</span>
          <h1 className="text-5xl text-yellow-800">04</h1>
          <h4>
            Creative <br />
            Team
          </h4>
        </div>
        <div className="flex">
          <span>+</span>
          <h1 className="text-5xl text-yellow-800">50</h1>
          <h4>
            Project <br />
            Complete
          </h4>
        </div>
      </div> */}
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
    </div>
  );
};

export default AboutCompany;
