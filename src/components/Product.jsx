import React from "react";
import "./Product.css";
import { connect } from "react-redux";

const Product = props => {
  return (
    <div className="product">
      <div className="product-title">{props.product.title}</div>
      <button onClick={() => props.add(props.product)}>add to cart</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    add: product => dispatch({ type: "ADD_PRODUCT", payload: product })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Product);
