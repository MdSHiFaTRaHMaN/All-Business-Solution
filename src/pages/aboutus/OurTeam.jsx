import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white">
      <div className="container px-6 py-8 w-full lg:w-10/12 mx-auto">
        {/* Header Section */}
        <div data-aos="fade-up">
          <p className="text-yellow-700 text-center">Meet Our Team.</p>
          <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
            Best Our Team
          </h2>
        </div>

        {/* Team Grid */}
        <div
          className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          data-aos="fade-up"
        >
          {/* Team Member 1 */}
          <div
            className="w-full max-w-xs text-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
              alt="avatar"
            />
            <div className="mt-2">
              <h3 className="text-2xl font-medium text-black">Nayon Ahamed</h3>
              <span className="mt-1 font-medium text-gray-600">
                Senior Flutter Developer
              </span>
            </div>
          </div>

          {/* Team Member 2 */}
          <div
            className="w-full max-w-xs text-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
              alt="avatar"
            />
            <div className="mt-2">
              <h3 className="text-2xl font-medium text-black">Shakib KB</h3>
              <span className="mt-1 font-medium text-gray-600">
                Flutter Developer
              </span>
            </div>
          </div>

          {/* Team Member 3 */}
          <div
            className="w-full max-w-xs text-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
              alt="avatar"
            />
            <div className="mt-2">
              <h3 className="text-2xl font-medium text-black">
                Md Kawsar Hasan
              </h3>
              <span className="mt-1 font-medium text-gray-600">
                MERN Stack Developer
              </span>
            </div>
          </div>

          {/* Team Member 4 */}
          <div
            className="w-full max-w-xs text-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
              alt="avatar"
            />
            <div className="mt-2">
              <h3 className="text-2xl font-medium text-black">
                Md Shifat Rahman
              </h3>
              <span className="mt-1 font-medium text-gray-600">
                Frontend Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
