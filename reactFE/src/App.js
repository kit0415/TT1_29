import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute.js";
import { Container, Table } from "react-bootstrap";

// Import Pages
import Login from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import NavBar from "./components/NavBar/NavBar";
import ProductPageScreen from "./screens/ProductPageScreen";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Route exact path="/" component={Login} />
        <Route
          exact
          path="/RegistrationScreen"
          component={RegistrationScreen}
        />
        <Route exact path="/ProductPageScreen" component={ProductPageScreen} />
        <Route exact path="/ShoppingCart" component={ShoppingCart} />
      </Router>
    </div>
  );
}

export default App;
