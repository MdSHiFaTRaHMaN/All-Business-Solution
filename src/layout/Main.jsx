import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ContactUs />
      <Footer />
      
    </div>
  );
};

export default Main;
