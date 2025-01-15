import { Button, Carousel } from "antd";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Bannar1 from "../../assets/bannarimage001.jpg";
import Bannar2 from "../../assets/bannarimage01.jpg";
import Bannar3 from "../../assets/bannarimage6.jpg";
import Bannar4 from "../../assets/bannarimage05.jpg";
import Bannar5 from "../../assets/bannarimage1.jpg";
import Bannar6 from "../../assets/bannarimage3.jpg";
import Bannar7 from "../../assets/bannarimage2.jpg";

const Bannar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const slides = [
    {
      image: Bannar1,
      title: "Small Business Account Software",
      description:
        "E office Management System Provide Expert Accounting Software",
    },
    {
      image: Bannar2,
      title: "Small Business Website Design",
      description:
        "To all Small Business, We Provide Website Design & Development Service",
    },
    {
      image: Bannar3,
      title: "Web Development Agency",
      description:
        "Develop your web Application with Best Web Development Agency\nE office Management System",
    },
    {
      image: Bannar4,
      title: "Customer eCommerce Website Development",
      description:
        "E office Management System Provide Best eCommerce Website Design Service",
    },
    {
      image: Bannar5,
      title: "Digital Marketing Support",
      description:
        "We will do Marketing & Remarketing with Paid and Free Tools",
    },
    {
      image: Bannar6,
      title: "School Management Software",
      description:
        "Manage Your student-teacher, Online Class Accounts From One Software",
    },
    {
      image: Bannar7,
      title: "Small Business Accounts Software",
      description:
        "E office Management System Provide Expert Accounting Software",
    },
  ];

  return (
    <div className="text-black flex items-center justify-center">
      <div className="w-full h-screen">
        <Carousel autoplay effect="fade" dots>
          {slides.map((slide, index) => (
            <header key={index}>
              <div
                className="w-full bg-center bg-cover h-screen relative"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div
                    data-aos="fade-up"
                    className="text-center px-4 md:px-10 lg:px-28"
                  >
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white font-mono leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-white text-sm sm:text-base md:text-lg font-medium mt-4">
                      {slide.description}
                    </p>
                    <Button
                      variant="outlined"
                      className="font-semibold text-lg text-white p-6 bg-transparent"
                    >
                      CHECKOUT NOW
                    </Button>
                  </div>
                </div>
              </div>
            </header>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Bannar;
