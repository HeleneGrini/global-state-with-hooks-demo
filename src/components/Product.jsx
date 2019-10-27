import React from "react";
import "./Product.css";
import { useStore } from "../store";

const Product = props => {
  const [, dispatch] = useStore();
  return (
    <div className="product">
      <div className="product-title">{props.product.title}</div>
      <button
        onClick={() =>
          dispatch({ type: "ADD_PRODUCT", payload: props.product })
        }
      >
        add to cart
      </button>
    </div>
  );
};

export default Product;
