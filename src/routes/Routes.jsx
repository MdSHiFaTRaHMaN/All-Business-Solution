import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/homepages/Home";
import AboutPage from "../pages/aboutus/AboutPage";
import ArticlePage from "../pages/ArticlePage/ArticlePage";
import PortfolioPage from "../pages/portfoliopage/PortfolioPage";
import ContactPage from "../pages/contactpage/ContactPage";
import Ecommerce from "../pages/Services/eCommerce/Ecommerce";
import WebdevPage from "../pages/Services/webdevelopment/WebdevPage";
import AppDevPage from "../pages/Services/appdevpage/AppDevPage";
import UiServicesPage from "../pages/Services/uiservicespage/UiServicesPage";
import MarketingPage from "../pages/Services/marketingpage/MarketingPage";
import ScoServicesPage from "../pages/Services/scoservices/ScoServicesPage";
import PrivacyPolicy from "../pages/PrivacyPolicy.jsx";
import App from "../App.jsx"
import TermsOfUse from "../pages/TermsOfUse.jsx";

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
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/article",
        element: <ArticlePage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/eCommerce-service",
        element: <Ecommerce />,
      },
      {
        path: "/webdev-service",
        element: <WebdevPage />,
      },
      {
        path: "/appdev-services",
        element: <AppDevPage />,
      },
      {
        path: "/ui-ux-services",
        element: <UiServicesPage />,
      },
      {
        path: "/marketing-services",
        element: <MarketingPage />,
      },
      {
        path: "/seo-services",
        element: <ScoServicesPage />
      },
      {
        path: "/app",
        element : <App />
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />
      },
      {
        path: "/terms-of-use",
        element: <TermsOfUse />
      }
    ],
  },
]);
export default Router;
