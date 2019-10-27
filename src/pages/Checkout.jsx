import React from "react";
import { connect } from "react-redux";
import "./Checkout.css";

const Checkout = props => {
  if (!props.selectedItems.length) {
    return "No products in cart";
  }

  return (
    <ul className="checkout">
      {props.selectedItems.map(item => (
        <li key={item.id}>
          <div>{item.title}</div>
          <div className="checkout-edit">
            <button onClick={() => props.remove(item)}>-</button>
            {item.quantity}
            <button onClick={() => props.add(item)}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    remove: product => dispatch({ type: "REMOVE_PRODUCT", payload: product }),
    add: product => dispatch({ type: "ADD_PRODUCT", payload: product })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
