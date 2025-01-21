import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Bannar from "../assets/privacy-mobile.jpg";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="">
      <div className="relative w-full h-[50vh] lg:h-[70vh]">
        <img
          src={Bannar}
          alt="Blog Banner"
          className="object-cover w-full h-full"
          data-aos="fade-up"
        />
        <div
          className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50"
          data-aos="fade-in"
          data-aos-delay="500"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3">
            Articles
          </h1>
          <p className=" text-gray-300 text-center px-4 lg:px-0">
            <div className="text-white">
              <Link to="/">Home</Link> / <Link to="/Article">Article</Link>
            </div>
          </p>
        </div>
      </div>
      <div className="min-h-screen p-6 md:p-10">
        <div className="max-w-4xl mx-auto overflow-hidden">
          {/* Header Section */}
          <header className="p-6">
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <p className="text-sm mt-1">Last Updated: Jan 20, 2025</p>
          </header>

          {/* Content Section */}
          <div className="p-6 text-gray-800">
            <p className="mb-4">
              Technobd Limited (“We,” “Our,” “Us”) is committed to protecting
              your privacy. This Privacy Policy (“Policy”) applies when you use
              our website and outlines our practices for collecting, using,
              maintaining, protecting, and disclosing your information.
            </p>

            {/* Section 1 */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                1. Information We Collect and How We Collect It
              </h2>
              <p className="mb-2">
                We may collect several types of information from and about users
                of our website:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Information by which
                  you may be personally identified such as name, postal address,
                  email address, telephone number, etc.
                </li>
                <li>
                  <strong>Non-Personal Information:</strong> Information about
                  your internet connection, the equipment you use to access our
                  website, and usage details. This is collected automatically as
                  you navigate through the site and may include usage details,
                  IP addresses, and information collected through cookies and
                  other tracking technologies.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                2. Third-Party Use of Cookies and Other Tracking Technologies
              </h2>
              <p>
                Certain third-party services and applications used on the
                website, which include but are not limited to, traffic analysis
                tools, advertisers, ad servers, content providers may use
                cookies or other tracking technologies to collect Non-Personal
                Information. These third parties may use this information to
                collect data over time and across different websites and other
                online services. This Policy does not cover third-party tracking
                technologies or their use. For information about third-party
                advertising networks and similar entities that use these
                technologies, please see their respective privacy policies.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                3. How We Use Your Information
              </h2>
              <p>
                We use the information collected, including Personal and
                Non-Personal Information, in the following ways:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To present and improve our website and its content.</li>
                <li>
                  To provide the services, products, or information you request.
                </li>
                <li>To understand usage trends and preferences.</li>
                <li>
                  To carry out obligations and enforce our rights arising from
                  any contracts.
                </li>
                <li>For any other purpose with your consent.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                4. Disclosure of Your Information
              </h2>
              <p>
                We may disclose aggregated Non-Personal Information about our
                users without restriction. Personal Information will be
                disclosed in the following ways:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  To subsidiaries, affiliates, contractors, service providers,
                  and other third parties we use to support our business.
                </li>
                <li>
                  To comply with any court order, law, or legal process,
                  including to respond to any government or regulatory request.
                </li>
                <li>
                  To a buyer or other successor in the event of a merger,
                  divestiture, restructuring, reorganization, dissolution, or
                  other sale or transfer of some or all of Technobd Limited’s
                  assets.
                </li>
                <li>
                  For any other purpose disclosed by us when you provide the
                  information.
                </li>
                <li>With your consent.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                5. Accessing and Correcting Your Information
              </h2>
              <p>
                You may send us an email at 
                <a href="" className="text-blue-500 hover:underline">allbusinesssolution.com</a> to request access to,
                correct, or delete any Personal Information that you have
                provided to us.
              </p>
            </div>
            {/* Section 6 */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                6. Children's Privacy
              </h2>
              <p>
                Our Website is not intended for children under 13 years of age.
                We do not knowingly collect Personal Information from children
                under 13.
              </p>
            </div>
            {/* Section 7 */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                7. Changes to Our Privacy Policy
              </h2>
              <p>
                Any changes we make to our Privacy Policy will be posted on this
                page with the revised date at the top. You are responsible for
                periodically visiting our Website and this Policy to check for
                any changes.
              </p>
            </div>
            {/* Section 8 */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                8. Contact Information
              </h2>
              <p>
                For questions or comments about this Policy and our privacy
                practices, contact us at:
              </p>
              <div className="mt-4">
                <h3 className="font-semibold">Technobd Limited</h3>
                <p>Manda, Dhaka in Bangladesh</p>
                <a href="" className="text-blue-600 hover:underline">allbusinesssolution.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
