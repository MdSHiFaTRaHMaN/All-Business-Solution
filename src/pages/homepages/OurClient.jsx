import { useEffect } from "react";
import { Button } from "antd"; // Ant Design Button
import { FaRegSmile } from "react-icons/fa"; // React Icons
import AOS from "aos";
import "aos/dist/aos.css"; // AOS Animation CSS
import CompanyLogo from "../../assets/Logo.png";
import Company from "../../assets/Admin Logo.png";

const clients = [
  { id: 1, name: "সহযোগী শপ", image: CompanyLogo },
  { id: 2, name: "The Technews", image: Company },
  { id: 3, name: "Minwal", image: Company },
  { id: 4, name: "Chocolate", image: Company },
  { id: 5, name: "Nusuki Makkah", image: Company },
  { id: 6, name: "Kuhel", image: Company },
];

const OurClient = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out", 
        once: false, 
      });
    }, []);

  return (
    <div className="py-16 px-4 md:px-8 bg-white grid lg:flex">
      {/* Heading Section */}
      <div className="text-center mb-12 w-full lg:w-2/5">
        <div
          className="flex items-center gap-2 mb-2"
          data-aos="fade-up"
        >
          <span className="h-[1px] w-[80px] bg-yellow-600 te"></span>
          <FaRegSmile className="text-yellow-600 text-2xl mr-2" />
          <span className="text-sm text-yellow-600">OUR CLIENTS</span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-semibold text-gray-800 text-start"
          data-aos="fade-up"
        >
          Some Friends Have Made While Working Together.
        </h2>
        {/* Button Section */}
        <div className="text-start mt-4" data-aos="fade-up">
        <Button color="primary" variant="outlined" className="font-semibold text-lg p-6">
            SEE ALL
          </Button>
        </div>
      </div>

      {/* Clients image Section */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center"
        data-aos="fade-up"
      >
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex flex-col items-center space-y-3 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg p-6"
            data-aos="zoom-in"
          >
            <img
              src={client.image}
              alt={client.name}
              className="w-28 h-28 object-contain rounded-full border border-gray-200 p-2"
            />
            <p className="text-base font-medium text-gray-700">{client.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClient;
