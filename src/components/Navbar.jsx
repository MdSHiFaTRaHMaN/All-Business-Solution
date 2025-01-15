import { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { SiMinutemailer } from "react-icons/si";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import AbsLogo from "../assets/Abslogomain.png";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  return (
    <div className="flex items-center justify-between px-6 md:px-12 py-4 shadow-md fixed top-0 z-50 bg-white w-full">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
        <img src={AbsLogo} alt="Logo" width={50} />
        <span>ABS</span>
      </Link>

      {/* Desktop Menu */}
      <Menu
        mode="horizontal"
        className="hidden md:flex flex-grow justify-center bg-transparent border-none text-gray-700 font-medium"
      >
        <Menu.Item key="home" className="hover:text-blue-600">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.SubMenu key="services" title="Services+" className="hover:text-blue-600">
          <Menu.Item key="ecommerce">
            <Link to="/eCommerce-service">E-Commerce Solutions</Link>
          </Menu.Item>
          <Menu.Item key="web">
            <Link to="/webdev-service">Web Development</Link>
          </Menu.Item>
          <Menu.Item key="mobile">
            <Link to="/appdev-services">App Development</Link>
          </Menu.Item>
          <Menu.Item key="uiux">
            <Link to="/ui-ux-services">UI/UX Design</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="portfolio" className="hover:text-blue-600">
          <Link to="/portfolio">Portfolio</Link>
        </Menu.Item>
        <Menu.Item key="aboutus" className="hover:text-blue-600">
          <Link to="/about-us">About Us</Link>
        </Menu.Item>
        <Menu.Item key="article" className="hover:text-blue-600">
          <Link to="/article">Article</Link>
        </Menu.Item>
      </Menu>

      {/* Desktop Contact Button */}
      <Link
        to="/contact"
        className="hidden md:flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        <span>Contact Us</span>
        <SiMinutemailer className="ml-2 text-xl" />
      </Link>

      {/* Mobile Menu Icon */}
      <Button
        type="text"
        onClick={showDrawer}
        className="md:hidden text-2xl text-gray-700 hover:text-blue-600"
        icon={<AiOutlineMenu />}
      />

      {/* Mobile Drawer Menu */}
      <Drawer
        title={
          <div className="flex items-center justify-between">
            <Link to="/" onClick={closeDrawer} className="flex items-center space-x-2 text-xl font-bold">
              <img src={AbsLogo} alt="Logo" width={40} />
              <span>ABS</span>
            </Link>
            <Button type="text" onClick={closeDrawer} icon={<AiOutlineClose />} />
          </div>
        }
        placement="right"
        closable={false}
        onClose={closeDrawer}
        visible={visible}
      >
        <Menu mode="vertical" className="text-gray-700 font-medium">
          <Menu.Item key="home-mobile">
            <Link to="/" onClick={closeDrawer}>Home</Link>
          </Menu.Item>
          <Menu.SubMenu key="services-mobile" title="Services+">
            <Menu.Item key="ecommerce">
              <Link to="/eCommerce-service" onClick={closeDrawer}>E-Commerce Solutions</Link>
            </Menu.Item>
            <Menu.Item key="web">
              <Link to="/webdev-service" onClick={closeDrawer}>Web Development</Link>
            </Menu.Item>
            <Menu.Item key="mobile">
              <Link to="/appdev-services" onClick={closeDrawer}>App Development</Link>
            </Menu.Item>
            <Menu.Item key="uiux">
              <Link to="/ui-ux-services" onClick={closeDrawer}>UI/UX Design</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="portfolio-mobile">
            <Link to="/portfolio" onClick={closeDrawer}>Portfolio</Link>
          </Menu.Item>
          <Menu.Item key="aboutus-mobile">
            <Link to="/about-us" onClick={closeDrawer}>About Us</Link>
          </Menu.Item>
          <Menu.Item key="article-mobile">
            <Link to="/article" onClick={closeDrawer}>Article</Link>
          </Menu.Item>
          <Menu.Item key="contact-mobile">
            <Link to="/contact" onClick={closeDrawer}>Contact Us</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default Navbar;
