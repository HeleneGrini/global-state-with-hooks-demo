import React from "react";
import { Provider } from "react-redux";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";

import { Route, Router, Redirect } from "react-router";
import { createBrowserHistory } from "history";

import NavBar from "./components/NavBar";
import { store } from "./store";

function App() {
  const history = createBrowserHistory();
  return (
    <Provider store={store}>
      <div className="App">
        <Router history={history}>
          <NavBar />
          <Route path="/" exact={true}>
            <Redirect to="/products" />
          </Route>
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Checkout} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
