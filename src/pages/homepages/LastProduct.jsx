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
      title: "CurGuru",
      description: "We know all your online business problems and how to solve them",
      features: [
        "Order Management",
        "Stock Management",
        "Employee Management",
        "Courier Management",
        "Accounts Problem",
        "Supplier Problem",
      ],
    },
    {
      title: "All Business Solution",
      description: "Manage your student-teacher online classes and accounts from one software",
      features: [
        "Student Management",
        "Teacher Management",
        "Course Management",
        "Class Management",
        "Order Management",
        "Subscription Management",
      ],
    },
    {
      title: "Commandes pro Admin",
      description: "Manage your customer orders",
      features: [
        "User Module",
        "Management Module",
        "IP Management Module",
        "Corporate User Module",
        "Network Module",
        "CRM Module",
      ],
    },
    {
      title: "Wings Blast",
      description: "E-commerce Websites",
      features: [
        "User Management",
        "Product Management",
        "Order Management",
        "Payment Management",
        "Auto Complete Location",
        "Admin Management",
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

          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default LastProduct;
