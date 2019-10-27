import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const NavBar = props => {
  const items = props.selectedItems.reduce(
    (accumulated, item) => accumulated + item.quantity,
    0
  );

  return (
    <div className="NavBar">
      <Link to="/products">Products</Link>
      <Link to="/cart">
        Cart <div>{items ? "(" + items + ")" : null}</div>
      </Link>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedItems: state.selectedItems
  };
}

export default connect(mapStateToProps)(NavBar);
