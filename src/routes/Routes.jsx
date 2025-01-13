import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/homepages/Home";
import MyCompany from "../pages/MyCompany";
import AboutPage from "../pages/aboutus/AboutPage";
import ArticlePage from "../pages/ArticlePage/ArticlePage";
import PortfolioPage from "../pages/portfoliopage/PortfolioPage";
import ContactPage from "../pages/contactpage/ContactPage";
import App from "../pages/homepages/App";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/myCompany",
        element: <MyCompany />
      },
      {
        path: "/about-us",
        element: <AboutPage />
      },
      {
        path: "/article",
        element: <ArticlePage />
      },
      {
        path: "/portfolio",
        element : <PortfolioPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/app",
        element: <App />
      }
    ],
  },
]);
export default Router;