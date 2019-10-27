import React from "react";
import "./Checkout.css";
import { useStore } from "../store";

const Checkout = () => {
  const [state, dispatch] = useStore();

  if (!state.selectedItems.length) {
    return "No products in cart";
  }

  return (
    <ul className="checkout">
      {state.selectedItems.map(item => (
        <li key={item.id}>
          <div>{item.title}</div>
          <div className="checkout-edit">
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_PRODUCT", payload: item })
              }
            >
              -
            </button>
            {item.quantity}
            <button
              onClick={() => dispatch({ type: "ADD_PRODUCT", payload: item })}
            >
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Checkout;
