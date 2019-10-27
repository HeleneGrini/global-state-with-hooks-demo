import React from "react";
import Product from "../components/Product";
import "./Products.css";
import { useStore } from "../store";

const Products = () => {
  const [state] = useStore();
  return (
    <div className="products">
      {state.products.map(product => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
