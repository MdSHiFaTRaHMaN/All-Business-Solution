import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

const LastProduct = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Easing function
      once: false, // Whether animation should happen only once
    });
  }, []);

  const products = [
    {
      title: "Prep Service FBA",
      description: "We know all your online business problems and how to solve them",
      features: [
        "Order management",
        "Stock management",
        "Employee management",
        "Courier management",
        "Accounts problem",
        "Supplier problem",
      ],
    },
    {
      title: "All Business Solution",
      description: "Manage your student-teacher online classes and accounts from one software",
      features: [
        "Student management",
        "Teacher management",
        "Course management",
        "Class management",
        "Order management",
        "Subscription management",
      ],
    },
    {
      title: "Commandes pro Admin",
      description: "Manage your customer accounts",
      features: [
        "User Module",
        "Management Module",
        "IP management Module",
        "Corporate User Module",
        "Network Module",
        "CRM Module",
      ],
    },
    {
      title: "Wings Blast",
      description: "Accounts software",
      features: [
        "Income Reports",
        "Expenses Reports",
        "Total Report",
        "Weekly Report",
        "Monthly Report",
        "Transaction Signature",
      ],
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div className="bg-gray-50 py-10 px-4 w-full lg:w-10/12 mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-sm font-semibold uppercase text-yellow-700">Awesome Products</h1>
        <h2 className="text-3xl font-semibold text-gray-900">Our Latest Products</h2>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3000}
        infinite
        swipeable
        draggable
        arrows
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 m-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="text-lg font-bold text-gray-800 text-center mb-4">{product.title}</h3>
            <p className="text-sm text-gray-600 text-center mb-4 h-[48px]">{product.description}</p>
            <ul className="text-sm text-gray-800 space-y-1 mb-6 text-center">
              {product.features.map((feature, idx) => (
                <li key={idx} className="border-b pb-1">{feature}</li>
              ))}
            </ul>
            <div className="text-center">
              <button className="px-4 py-2 border border-gray-800 text-gray-800 font-semibold rounded hover:bg-gray-800 hover:text-white transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default LastProduct;
