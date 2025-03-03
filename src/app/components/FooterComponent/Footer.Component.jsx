import React from "react";
import { orderNumber } from "../../../data/data.js";
import "../../../index.css";

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  // if (!isOpen) return <p>CLOSED</p>;

  return (
    <>
      <div className="footer">
        <a href={orderNumber} target="_blank">
          <button className="btn">Ordenar</button>
        </a>
      </div>
    </>
  );

  // return React.createElement("footer", null, "We're currently open!");
}

// function Order({ closeHour, openHour }) {
//   return (
//     <div className="order">
//       <p>
//         Estamos abiertos desde las {openHour}:00 hasta las {closeHour}:00 horas
//       </p>
//       {/* <button className="btn">Order</button> */}
//     </div>
//   );
// }
