import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import APIServices from "../services/APIServices"
import { useHistory } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 const history = useHistory();
  function validateForm() {
    //Add in validation criterias 
    return username.length > 0 && password.length > 0;
  }

  const handleLoginSubmit = (event) => {
    //Call login function
    event.preventDefault();
    
    var data = {
      username: username,
      password: password
    };

    APIServices.login(data)
      .then(response => {
        console.log(response.data);
        localStorage.setItem('usertoken', response.data);
        history.push("/ProductPageScreen");
      })
      .catch(e => {
        console.log("Login Fail");
      });
  }

  return (
    <div className="Login">
      <h1>Welcome to MarketPlace Login!</h1>
      <Form onSubmit={handleLoginSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}