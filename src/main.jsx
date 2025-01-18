import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import AnimatedCursor from "react-animated-cursor";
// import Burgur from "../src/assets/cursor3.png"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnimatedCursor
      innerSize={10}
      outerSize={25}
      color="255, 215, 0" // Golden Color (RGB for Gold)
      outerAlpha={0.5}
      innerScale={1.2}
      outerScale={1.5}
      trailingSpeed={5}
      outerStyle={{
        backgroundColor: "rgba(255, 215, 0, 0.1)",
        border: "2px solid rgba(255, 215, 0, 0.8)",
        boxShadow: "0 0 10px 5px rgba(255, 215, 0, 0.7)",
        animation: "pulse 2s infinite",
      }}
      innerStyle={{
        backgroundColor: "rgba(255, 215, 0, 1)",
        border: "1px solid rgba(255, 255, 255, 0.8)",
        boxShadow: "0 0 4px rgba(255, 215, 0, 0.8)",
      }}
    />

    {/* <AnimatedCursor
  // innerSize={12}
  outerSize={30}
  // color="255, 105, 180" // Hot Pink (RGB)
  outerAlpha={0.4}
  // innerScale={1.5}
  outerScale={2}
  trailingSpeed={6}
  outerStyle={{
    backgroundImage: `url(${Burgur})`, // Replace 'Burgur' with the path to your image
    backgroundSize: "cover",
    backgroundColor: "transparent",
    // border: "3px solid rgba(255, 105, 180, 0.8)", // Pink Border
    borderRadius: "50%", // Circle shape
    // boxShadow: "0 0 15px 5px rgba(255, 105, 180, 0.5)", // Glow effect
    // animation: "pulse 2s infinite", // Add pulsing animation
  }}
  innerStyle={{
    cursor: "auto",
  //   backgroundImage: `url(${Burgur})`,
  //   backgroundSize: "cover",
  //   backgroundColor: "transparent",
  //   border: "2px solid rgba(255, 255, 255, 0.9)", // White border for contrast
  //   borderRadius: "50%", // Circle shape
  //   boxShadow: "0 0 10px rgba(255, 105, 180, 0.8)", // Subtle inner glow
  //   animation: "spin 4s linear infinite", // Smooth spinning animation
  }}
/> */}

    <RouterProvider router={Routes} />
  </StrictMode>
);
