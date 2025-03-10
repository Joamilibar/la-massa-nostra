import React from "react";
import { pizzaData, orderNumber } from "../../../data/data.js";
import "../../../index.css";

export default function Menu() {
  const pizzas = pizzaData;
  console.log(pizzas);
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Pizzas</h2>
      <p>
        Pizzas artesanales al estilo napolitanas, con sabores italiano y del
        América del sur. Elaboradas a la piedra siendo una fusión de sabores
        única.
      </p>

      {numPizzas > 0 ? (
        <>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :</p>
      )}

      {/* <button onClick={orderNumber} className="btn">
        Order
      </button> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  const formatoNumero = (number) =>
    new Intl.NumberFormat("ch-CL").format(number);

  // if (pizzaObj.soldOut) return null;

  return (
    <div className="menu">
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        {/* <img src={pizzaObj.photoName} alt={pizzaObj.name} /> */}
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>

          {/* {pizzaObj.soldOut ? (
            <span>SOLD OUT</span>
            ) : (
                <span>{pizzaObj.price}</span>
                )} */}

          <span className="price">
            {pizzaObj.soldOut
              ? "SOLD OUT"
              : "$ " + formatoNumero(pizzaObj.price)}
          </span>
        </div>
      </li>
    </div>
  );
}
