import { Link } from "react-router-dom";
import AboutUs from "../../assets/aboutus.jpeg";

const HeaderAbout = () => {
  return (
    <div>
      <div
        className=" bg-center bg-cover w-full h-[50vh] lg:h-[50vh]"
        style={{
          backgroundImage: `url(${AboutUs})`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
            About <span className="text-blue-400">Us</span>
            </h1>
           <div className="text-white">
             <Link to="/">Home</Link> / <Link to="/about-us">About Us</Link>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAbout;
