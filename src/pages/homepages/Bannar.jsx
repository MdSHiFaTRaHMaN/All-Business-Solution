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
import { Link } from "react-router-dom";

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
      link: "/appdev-services",
    },
    {
      image: Bannar2,
      title: "Small Business Website Design",
      description:
        "To all Small Business, We Provide Website Design & Development Service",
      link: "/webdev-service",
    },
    {
      image: Bannar3,
      title: "Web Development Agency",
      description:
        "Develop your web Application with Best Web Development Agency\nE office Management System",
      link: "/webdev-service", 
    },
    {
      image: Bannar4,
      title: "Customer eCommerce Website Development",
      description:
        "E office Management System Provide Best eCommerce Website Design Service",
      link: "/eCommerce-service",
    },
    {
      image: Bannar5,
      title: "Digital Marketing Support",
      description:
        "We will do Marketing & Remarketing with Paid and Free Tools",
      link: "/marketing-services",
    },
    {
      image: Bannar6,
      title: "UI/UX Design",
      description:
        "Manage Your Website & App Design, Management From One Software",
      link: "/ui-ux-services",
    },
    {
      image: Bannar7,
      title: "SCO Optimization",
      description:
        "SEO services | Your key to sustainable online success",
      link: "/seo-services",
    },
  ];

  return (
    <div className="text-black flex items-center justify-center">
      <div className="w-full h-screen">
        {/* <Carousel autoplay effect="fade" dots arrows>
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
                    <Link to={slide.link}>
                      <Button
                        variant="outlined"
                        className="font-semibold text-lg text-white p-6 bg-transparent"
                      >
                        CHECKOUT NOW
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </header>
          ))}
        </Carousel> */}
            <Carousel autoplay effect="fade" dots arrows>
      {slides.map((slide, index) => (
        <header key={index}>
          <div
            className="w-full bg-center bg-cover h-screen relative"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              {/* AOS অ্যানিমেশন */}
              <div
                data-aos="fade-up" // প্রতিটি স্লাইডে ফেড-আপ অ্যানিমেশন
                className="text-center px-4 md:px-10 lg:px-28"
              >
                <h1
                  className="text-2xl sm:text-3xl md:text-5xl font-bold text-white font-mono leading-tight"
                  data-aos="fade-down" // হেডারে ফেড-ডাউন অ্যানিমেশন
                  data-aos-delay="200"
                >
                  {slide.title}
                </h1>
                <p
                  className="text-white text-sm sm:text-base md:text-lg font-medium mt-4"
                  data-aos="fade-up" // প্যারাগ্রাফে ফেড-আপ অ্যানিমেশন
                  data-aos-delay="400"
                >
                  {slide.description}
                </p>
                <Link to={slide.link}>
                  <Button
                    variant="outlined"
                    className="font-semibold text-lg text-white p-6 bg-transparent"
                    data-aos="zoom-in" // বাটনে জুম ইন অ্যানিমেশন
                    data-aos-delay="600"
                  >
                    CHECKOUT NOW
                  </Button>
                </Link>
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
