import React from "react";
import Product from "../components/Product";
import "./Products.css";
import { connect } from "react-redux";

const Products = props => {
  return (
    <div className="products">
      {props.products.map(product => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(Products);
