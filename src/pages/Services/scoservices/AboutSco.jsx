import AboutVideo from "../../../assets/seo-onsite.mp4";

const AboutSco = () => {
  return (
    <div>
      <section className="bg-white ">
        <div className="relative flex">
          <div className="min-h-screen lg:w-1/3"></div>
          <div className="hidden w-3/4 min-h-screen bg-gray-100  lg:block"></div>

          <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-2 mx-auto lg:absolute lg:inset-x-0">
            <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
              <video
                className="object-cover object-center w-full lg:w-[32rem] bg-gray-300 rounded-lg h-96"
                src={AboutVideo}
                autoPlay
                loop
                muted
                playsInline
                aria-label="About us video"
              />

              <div className="mt-8 lg:px-10 lg:mt-0">
                <h1 className="text-2xl font-semibold text-gray-800 lg:w-72">
                  Understanding the Role of SEO in Business Growth
                </h1>

                <p className=" mt-6">
                  “ Search Engine Optimization (SEO) is the process of
                  optimizing your website to rank higher in search engine
                  results pages (SERPs), thereby increasing organic (non-paid)
                  traffic to your site. In simple terms, it's about making your
                  website more visible and accessible to potential customers who
                  are actively searching for products or services related to
                  your industry. ”
                </p>

                <p className="mt-6 ">
                  With the majority of online experiences starting with a search
                  engine query, appearing on the first two pages is crucial for
                  attracting clicks and, subsequently, conversions. Research
                  shows that websites ranking on the first page of Google
                  receive significantly more traffic than those on subsequent
                  pages, highlighting the importance of SEO in driving online
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSco;
