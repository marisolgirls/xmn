import React from "react";

const Card = ({ productName, description }) => {
  return (
    <div style={{ border: "1px solid #000", padding: "10px", marginTop: "20px" }}>
      <h2>Producto: {productName}</h2>
      <p>Descripción: {description}</p>
    </div>
  );
};

export default Card;
