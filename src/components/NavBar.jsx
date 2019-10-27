import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useStore } from "../store";
const NavBar = () => {
  const [state] = useStore();

  const items = state.selectedItems.reduce(
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

export default NavBar;
