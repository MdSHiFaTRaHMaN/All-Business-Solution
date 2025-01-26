import { useEffect } from "react";
import { Button } from "antd"; // Ant Design Button
import { FaRegSmile } from "react-icons/fa"; // React Icons
import AOS from "aos";
import "aos/dist/aos.css"; // AOS Animation CSS
import Company from "../../assets/Admin Logo.png";
import AOA from "../../assets/alloneautos.jpg";
import Hangest from "../../assets/Hangest.jpg";
import Commando from "../../assets/Commando.png";
import WingsBlast from "../../assets/wingblastCony.jpeg";
import CarGuru from "../../assets/Carguru.png";
import { Link } from "react-router-dom";

const clients = [
  { id: 1, name: "All One Autos", image: AOA },
  { id: 2, name: "Hungeat", image: Hangest },
  { id: 3, name: "Commandes Pro", image: Commando },
  { id: 4, name: "Prep Services FBA", image: Company },
  { id: 5, name: "Wings Blast", image: WingsBlast },
  { id: 6, name: "Garir Hat", image: CarGuru },
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
        <div className="flex items-center gap-2 mb-2" data-aos="fade-up">
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
          <Link to="/portfolio">
            <Button
              color="primary"
              variant="outlined"
              className="font-semibold text-lg p-6"
            >
              SEE ALL
            </Button>
          </Link>
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
              className="w-28 h-28 object-contain rounded border border-gray-200 p-1"
            />
            <p className="text-base text-gray-700 font-semibold">
              {client.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClient;
