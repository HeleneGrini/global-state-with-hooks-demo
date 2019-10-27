import React from "react";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";

import { Route, Router } from "react-router";
import { createBrowserHistory } from "history";

import NavBar from "./components/NavBar";
import { StoreProvider } from "./store";

function App() {
  const history = createBrowserHistory();
  return (
    <StoreProvider>
      <div className="App">
        <Router history={history}>
          <NavBar />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Checkout} />
        </Router>
      </div>
    </StoreProvider>
  );
}

export default App;
