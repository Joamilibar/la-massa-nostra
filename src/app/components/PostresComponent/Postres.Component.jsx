import React from "react";
import { postresData, orderNumber } from "../../../data/data.js";
import "../../../index.css";

export default function Postres() {
  const postres = postresData;
  // const postres = [];
  const numpostres = postres.length;

  return (
    <div className="menu">
      <h2 className="postres">Postres</h2>

      <>
        <ul className="postres">
          {postres.map((postre) => (
            <Postre postreObj={postre} key={postre.name} />
          ))}
        </ul>
      </>

      {/* <button onClick={orderNumber} className="btn">
        Order
      </button> */}
      {/* <a href={orderNumber} target="_blank">
        <button className="btn">Order</button>
      </a> */}
    </div>
  );
}

function Postre({ postreObj }) {
  console.log(postreObj);
  const formatoNumero = (number) =>
    new Intl.NumberFormat("ch-CL").format(number);

  // if (postreObj.soldOut) return null;

  return (
    <div className="menu">
      <li className={`pizza ${postreObj.soldOut ? "sold-out" : ""}`}>
        {/* <img src={postreObj.photoName} alt={postreObj.name} /> */}
        <div>
          <h3>{postreObj.name}</h3>
          <p>{postreObj.ingredients}</p>

          {/* {postreObj.soldOut ? (
            <span>SOLD OUT</span>
            ) : (
                <span>{postreObj.price}</span>
                )} */}

          <span className="price">
            {postreObj.soldOut
              ? "SOLD OUT"
              : "$ " + formatoNumero(postreObj.price)}
          </span>
        </div>
      </li>
    </div>
  );
}
