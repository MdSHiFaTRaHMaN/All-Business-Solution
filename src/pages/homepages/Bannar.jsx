import { Button, Carousel } from "antd";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Bannar1 from "../../assets/homebannar1.jpeg";
import Bannar2 from "../../assets/homebannar2.jpeg";
import Bannar3 from "../../assets/homebannar3.jpeg";
import Bannar4 from "../../assets/homebannar4.jpeg";
import Bannar5 from "../../assets/homebannar6.jpeg";
import Bannar6 from "../../assets/homebannar5.jpeg";
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
      title: "Innovative App Development for Every Platform",
      description:
        "We craft user-friendly and feature-rich mobile apps tailored to your needs, ensuring top-notch performance across all devices.",
      link: "/appdev-services",
    },
    {
      image: Bannar2,
      title: "Professional Web Development Services",
      description:
        "Build responsive, secure, and dynamic websites that captivate users and elevate your brand.",
      link: "/webdev-service",
    },
    {
      image: Bannar3,
      title: "Stunning UI/UX Design for Maximum Impact",
      description:
        "Deliver engaging user experiences with sleek, intuitive, and modern designs that leave a lasting impression.",
      link: "/ui-ux-services",
    },
    {
      image: Bannar4,
      title: "Boost Sales with Powerful eCommerce Solutions",
      description:
        "Launch your online store with advanced features, seamless navigation, and secure payment integration.",
      link: "/eCommerce-service",
    },
    {
      image: Bannar5,
      title: "Results-Driven Digital Marketing Strategies",
      description:
        "Expand your reach and grow your audience with targeted campaigns, social media, and content marketing",
      link: "/marketing-services",
    },
    {
      image: Bannar6,
      title: "Top-Notch SEO to Rank Higher",
      description:
        "Improve your website’s visibility on search engines and drive organic traffic with proven SEO techniques.",
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
        <Carousel autoplay autoplaySpeed={2000} effect="fade" dots arrows>
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
                    <h1
                      className="text-2xl sm:text-3xl md:text-5xl font-bold text-white font-mono leading-tight"
                      data-aos="fade-down" 
                      data-aos-delay="200"
                    >
                      {slide.title}
                    </h1>
                    <p
                      className="text-white text-sm sm:text-base md:text-lg font-medium mt-4"
                      data-aos="fade-up" 
                      data-aos-delay="400"
                    >
                      {slide.description}
                    </p>
                    <Link to={slide.link}>
                      <Button
                        variant="outlined"
                        className="font-semibold text-lg text-white p-6 bg-transparent"
                        data-aos="zoom-in" 
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
