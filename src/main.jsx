import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
// import AnimatedCursor from "react-animated-cursor";

createRoot(document.getElementById("root")).render(
  <StrictMode>
{/* <AnimatedCursor
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
/> */}


    <RouterProvider router={Routes} />
  </StrictMode>
);
