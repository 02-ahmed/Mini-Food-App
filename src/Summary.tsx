import React from "react";
import { Product } from "./Products";

interface Props {
  cart: Product[];
}

const Summary = ({ cart }: Props) => {
  return (
    <div className="container-fluid bg-white rounded">
      <h5>Your Cart</h5>
      <ul>
        {cart.map((item) => (
          <div>
            {item.name}
            {item.price}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
