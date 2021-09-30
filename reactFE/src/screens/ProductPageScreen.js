import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function ProductPageScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  function handleOnPress() {
    //Call login function
    // username, password


  }

  return (
    <div className="ProductPageScreen">
      <h1>Welcome to MarketPlace ProductPage!</h1>
      <Form>
        <Button block size="lg" type="submit" disabled={!handleOnPress()}>
          Logout
        </Button>
      </Form>
    </div >
  );
}
