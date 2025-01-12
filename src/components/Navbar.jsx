import { Menu } from "antd";
import Logo from "../assets/web logo.png";
import { SiMinutemailer } from "react-icons/si";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex  items-center px-6 py-4 shadow-lg">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <span className="text-lg font-bold text-black">
            <img src={Logo} alt="" width={130} />
          </span>
        </Link>
      </div>

      {/* Menu */}
      <Menu
        mode="horizontal"
        className="flex-grow justify-center bg-transparent border-none text-gray-700 font-semibold"
      >
        <Menu.Item key="home" className="hover:text-black">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.SubMenu
          key="services"
          title="Services+"
          className="hover:text-black"
          popupClassName="custom-submenu"
        >
          <div className="grid grid-cols-2 gap-x-2 gap-y-2 p-2">
            <Menu.Item key="web">Web Development</Menu.Item>
            <Menu.Item key="mobile">Mobile Apps</Menu.Item>
            <Menu.Item key="uiux">UI/UX Design</Menu.Item>
            <Menu.Item key="seo">SEO Optimization</Menu.Item>
            <Menu.Item key="cloud">Cloud Solutions</Menu.Item>
            <Menu.Item key="data">Data Analysis</Menu.Item>
            <Menu.Item key="cybersecurity">Cybersecurity</Menu.Item>
            <Menu.Item key="ecommerce">E-Commerce Solutions</Menu.Item>
          </div>
        </Menu.SubMenu>

        <Menu.Item key="portfolio" className="hover:text-black">
          <Link to="/portfolio">Portfolio</Link>
        </Menu.Item>

        <Menu.Item key="aboutus" className="hover:text-black">
          <Link to="/about-us">About Us</Link>
        </Menu.Item>

        <Menu.Item key="article" className="hover:text-black">
          <Link to="/article">Article</Link>
        </Menu.Item>
      </Menu>

      {/* Get a Quote Button */}
      <button className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">
        <Link to="/contact" className="flex items-center">
          <span>CONTACT US</span>
          <span className="ml-2 text-xl text-white">
            <SiMinutemailer />
          </span>
        </Link>
      </button>
    </div>
  );
};

export default Navbar;
