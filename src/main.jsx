import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Menu from "./app/components/MenuComponent/Menu.Component.jsx";
import Header from "./app/components/HeaderComponent/Header.Component.jsx";
import Footer from "./app/components/FooterComponent/Footer.Component.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Menu />
  </StrictMode>
);

createRoot(document.getElementById("footer")).render(
  <StrictMode>
    <Footer />
  </StrictMode>
);
