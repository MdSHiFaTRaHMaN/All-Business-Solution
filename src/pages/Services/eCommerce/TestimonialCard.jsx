import { Card, Rate } from "antd";
import "aos/dist/aos.css";
import AOS from "aos";
import User from "../../../assets/user.png"

AOS.init();

const TestimonialCard = ({ name, title, comment, rating }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="w-full md:w-1/2 lg:w-1/3 px-4 py-6"
    >
      <Card
        className="shadow-lg rounded-lg border-t-4 border-blue-500"
        bodyStyle={{ padding: "20px" }}
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <img src={User} alt="" className="rounded-full" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{comment}</p>
        <Rate disabled defaultValue={rating} className="text-blue-500" />
      </Card>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "James J. Fung",
      title: "CEO",
      comment:
        "All business Soluition built my website in just 4 weeks, and they built my e-commerce website exactly how I wanted it to be. I'm totally happy with their fast and accurate service.",
      rating: 5,
    },
    {
      name: "Thomas Oscar",
      title: "Manager",
      comment:
        "I've got my e-commerce website built from All business Soluition. I'm satisfied with their outstanding design and development work and best quality customer service.",
      rating: 4,
    }
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-yellow-700">Testimonials</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Our Client's Comment
          </h2>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              comment={testimonial.comment}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
