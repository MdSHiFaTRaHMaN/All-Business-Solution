import { Link } from "react-router-dom";
import AbsLogo from "../assets/allbusinesssolution.png";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#110940] text-white body-font">
      <div className="container px-5 py-7 mx-auto flex flex-wrap items-center justify-between">
        {/* Brand Section */}
        <div className="flex items-center mb-4 sm:mb-0">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src={AbsLogo} alt="" width={60} />
            <span className="ml-3 text-2xl font-bold">
              All Business Solution
            </span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap text-lg justify-center sm:justify-start gap-6">
          <Link
            to="/about-us"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <a className="hover:text-gray-400">About Us</a>
          </Link>
          <Link
            to="/privacy-policy"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <a className="hover:text-gray-400">Privacy Policy</a>
          </Link>
          <Link
            to="/terms-of-use"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <a className="hover:text-gray-400">Terms of Use</a>
          </Link>
          <Link
            to="/contact"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <a className="hover:text-gray-400">Contact us</a>
          </Link>
        </div>

        {/* Social Media Icons */}
        {/* <div className="flex justify-center text-center sm:justify-end mt-6 sm:mt-0 gap-4 text-lg">
          <a className="text-gray-200 hover:text-blue-600">
            <AiFillGithub className="w-6 h-6" />
          </a>
          <a className="text-gray-200 hover:text-blue-400">
            <CiLinkedin className="w-6 h-6" />
          </a>
          <a className="text-gray-200 hover:text-pink-500">
            <SiUpwork className="w-6 h-6" />
          </a>
          <a className="text-gray-200 hover:text-green-600">
            <TbBrandFiverr className="w-6 h-6" />
          </a>
        </div> */}
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-5 py-6 border-t border-gray-700 flex justify-center sm:flex-row items-center">
        <p className="text-sm text-gray-300">
          ©2025 ALL Business Solution —
          <a
            className="text-gray-200 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @designer ALL Business Solution Team
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
