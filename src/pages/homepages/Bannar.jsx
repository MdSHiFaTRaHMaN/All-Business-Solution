import BannarImg from "../../assets/bannar.png";
import { Button, Carousel } from "antd";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Bannar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Easing function
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="text-black flex items-center justify-center m-7">
      <div className="w-4/5 md:w-2/3 lg:w-4/5">
        <Carousel autoplay>
          {[...Array(3)].map((_, index) => (
            <div key={index}>
              <section className="text-gray-600 body-font bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 ... rounded-3xl">
                <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                  <div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
                    data-aos="fade-right"
                  >
                    <h1
                      className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900"
                      data-aos="fade-down"
                    >
                      Web <br /> Development
                    </h1>
                    <p
                      className="mb-8 leading-relaxed font-semibold text-black"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      Technobd Limited provides high-quality development such as
                      web design and development, database design & integration,
                      programming, web site maintenance, e-commerce solutions
                      and application program development.
                    </p>
                    <div
                      className="flex justify-center"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <Button
                        className="px-6 py-6 text-white bg-green-600 rounded hover:bg-green-700"
                        data-aos="zoom-in"
                      >
                        LEARN MORE
                      </Button>
                    </div>
                  </div>
                  <div
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                    data-aos="zoom-in"
                  >
                    <img
                      className="object-cover object-center rounded"
                      alt="hero"
                      src={BannarImg}
                    />
                  </div>
                </div>
              </section>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Bannar;
