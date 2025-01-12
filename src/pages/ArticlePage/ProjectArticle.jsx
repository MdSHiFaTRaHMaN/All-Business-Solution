
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Pagination } from "antd";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Article1 from "../../assets/article.png"
import Article2 from "../../assets/article1.jpg"
import Article3 from "../../assets/article2.jpg"

const ProjectArticle = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const articles = [
    {
      category: "Web Development",
      title: "Dynadot: The best place for website hosting and domain registration!",
      image: Article3,
      date: "29 Sep",
    },
    {
      category: "eCommerce",
      title: "Why your e-commerce business should hire a delivery service company? Here",
      image: Article1,
      date: "29 Sep",
    },
    {
      category: "eCommerce",
      title: "Build the Best E-commerce Website with us in 2020",
      image: Article2,
      date: "20 Sep",
    },
    {
      category: "Accounting Software",
      title: "Which Accounting Software You should Buy?",
      image: Article1,
      date: "20 Sep",
    },
    {
      category: "eCommerce",
      title: "Why your e-commerce business should hire a delivery service company? Here",
      image: Article1,
      date: "29 Sep",
    },
    {
      category: "eCommerce",
      title: "Build the Best E-commerce Website with us in 2020",
      image: Article2,
      date: "20 Sep",
    },
    {
      category: "Accounting Software",
      title: "Which Accounting Software You should Buy?",
      image: Article1,
      date: "20 Sep",
    },
    {
      category: "eCommerce",
      title: "Build the Best E-commerce Website with us in 2020",
      image: Article2,
      date: "20 Sep",
    }
  ];

  return (
    <div className="w-full lg:w-10/12 mx-auto py-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white border shadow-sm rounded-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="object-cover w-full h-48 transform hover:scale-105 transition-transform duration-500 ease-in-out"
                data-aos="zoom-in"
              />
              <span className="absolute top-2 right-2 bg-yellow-800 text-white text-sm px-2 py-1 rounded">
                {article.date}
              </span>
            </div>
            <div className="p-5">
              <p className="text-yellow-800 uppercase text-sm font-semibold">
                {article.category}
              </p>
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {article.title}
              </h2>
              <button className="flex items-center gap-2 text-yellow-800 hover:text-yellow-600 transition">
                Read More <FaRegArrowAltCircleRight />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};

export default ProjectArticle;
