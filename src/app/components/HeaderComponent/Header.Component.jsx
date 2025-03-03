import React from "react";
import logo from "../../../assets/la-massa-nostra.png";

import ReactDom from "react-dom/client";

export default function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
      {/* <h1 style={style}>La Massa Nostra</h1> */}
    </header>
  );
}
