import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function ProductPageScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleOnPressShoppingCart() {
    //Call login function
    // username, password

    console.log('You clicked logout.');
  }

  function handleOnPressLogout() {
    //Call login function
    // username, password

    console.log('You clicked Cart.');
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
    </div >
  );
}