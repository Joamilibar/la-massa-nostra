import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Menu from "./app/components/MenuComponent/Menu.Component.jsx";
import Header from "./app/components/HeaderComponent/Header.Component.jsx";
import Postres from "./app/components/PostresComponent/Postres.Component.jsx";
import Footer from "./app/components/FooterComponent/Footer.Component.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Menu />
    <Postres />
    <Footer />
  </StrictMode>
);

// createRoot(document.getElementById("footer")).render(
//   <StrictMode>
//     <Footer />
//   </StrictMode>
// );
