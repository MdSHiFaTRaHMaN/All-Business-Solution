import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Typography, Divider } from "antd";
import { Link } from "react-router-dom";
import BannerImage from "../assets/terms-conditions.png";

const { Title, Paragraph } = Typography;

const TermsOfUse = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-[50vh] lg:h-[70vh]">
        <img
          src={BannerImage}
          alt="Terms of Use Banner"
          className="object-cover w-full h-full"
          data-aos="fade-up"
        />
        <div
          className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50"
          data-aos="fade-in"
          data-aos-delay="500"
        >
          <Title className="text-white text-center mb-2" level={1}>
            <span className="text-white">Terms of Use</span>
          </Title>
          <p className="text-white">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            / Terms of Use
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-10">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          {/* Header */}
          <header data-aos="fade-up">
            <Title level={2}>Terms of Use</Title>
            <Paragraph className="text-sm text-gray-500">
              Last Updated: Jan 20, 2025
            </Paragraph>
          </header>

          <Divider />

          {/* Sections */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
            <section>
              <Title level={3}>Welcome to Our Site</Title>
              <Paragraph>
                Welcome to the website (the “Site”) of Technobd Limited (“us”,
                “we”, or “our”). This Site is made available to you in order to
                provide information about our products, services, and
                opportunities. By accessing or using the Site, you acknowledge
                your acceptance to be bound by these Terms. If you do not agree,
                please refrain from using our Site.
              </Paragraph>
            </section>

            <section>
              <Title level={3}>Purchases</Title>
              <Paragraph>
                Should you wish to procure any product or service offered by us
                (“Purchase”), you are required to communicate your request via
                one of the following mediums: our contact form, live chat,
                designated email address, or provided contact number.
              </Paragraph>
            </section>

            <section>
              <Title level={3}>Termination</Title>
              <Paragraph>
                We hold the right to suspend or terminate your access to our
                Site without prior notice or liability, should you violate the
                Terms.
              </Paragraph>
            </section>

            <section>
              <Title level={3}>Content, Copyrights, and Trademarks</Title>
              <Paragraph>
                The Site comprises various types of content, including text,
                data, service or product descriptions, graphics, images, user
                interfaces, and more. Unauthorized reproduction, publication,
                or modification of the Site or its Content is strictly
                prohibited.
              </Paragraph>
            </section>

            <section>
              <Title level={3}>Prohibited Use of the Site</Title>
              <Paragraph>
                You agree not to misuse or engage in any disruptive activity on
                the Site. The use of automated systems like “robots” or
                “spiders” to monitor or copy the Site or its Content is
                prohibited.
              </Paragraph>
            </section>

            <section>
              <Title level={3}>Privacy Policy</Title>
              <Paragraph>
                By using our Site, you consent to the terms of our{" "}
                <Link to="/privacy-policy" className="text-blue-500 hover:underline">
                  Privacy Policy
                </Link>
                .
              </Paragraph>
            </section>

            <section>
              <Title level={3}>External Links</Title>
              <Paragraph>
                The Site may contain links to third-party websites or services.
                These links do not imply an endorsement by Technobd Limited. We
                bear no responsibility for the content or practices of any
                third-party websites.
              </Paragraph>
            </section>

            <section>
              <Title level={3}>Changes to Terms</Title>
              <Paragraph>
                We reserve the right to modify or replace these Terms at any
                time. Your continued use of the Site constitutes your agreement
                to these updated Terms.
              </Paragraph>
            </section>

            <section>
              <Title level={3}>Disclaimer; Limitations of Liability</Title>
              <Paragraph>
                Technobd Limited disclaims any warranties, express or implied,
                to the fullest extent permitted by law.
              </Paragraph>
            </section>

            <section>
              <Title level={3}>Indemnification</Title>
              <Paragraph>
                You agree to indemnify, defend, and hold harmless Technobd
                Limited from any claims or damages arising from your use of the
                Site.
              </Paragraph>
            </section>

            <section>
              <Title level={3}>Governing Law</Title>
              <Paragraph>
                These Terms are governed by the laws of the People’s Republic of
                Bangladesh. Disputes shall be resolved exclusively in the courts
                of Bangladesh.
              </Paragraph>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
