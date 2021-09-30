import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

import { useHistory } from "react-router-dom";

export default function ProductPageScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleOnPressShoppingCart() {
    //Call login function
    // username, password
    history.push("/ShoppingCart");

  }

  function handleOnPressLogout() {
    //Call login function
    // username, password
    history.push("/LoginScreen");

  }

  function handleOnPressTop() {
    //Call login function
    // username, password
    history.push("/TopProduct");

  }


  return (
    <div className="ProductPageScreen">
      <h1>Welcome to MarketPlace ProductPage!</h1>
      <Button block size="lg" type="Cart" onClick={() => handleOnPressShoppingCart()}>
        Shopping cart
      </Button>

      <Button block size="lg" type="Logout" onClick={() => handleOnPressLogout()}>
        Logout
      </Button>

      <Button block size="lg" type="Logout" onClick={() => handleOnPressTop()}>
        Top Products
      </Button>
    </div >
  );
}