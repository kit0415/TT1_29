import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Registration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [postalcode, setpostalcode] = useState("");
  const [gender, setgender] = useState("");
  const [createdat, setcreatedat] = useState("");

  function validateForm() {
    //Add in validation criterias 
    return (username.length > 0 && password.length > 0 && firstname.length > 0 && lastname.length > 0
      && postalcode.length > 0 && gender.length > 0);
  }

  function handleRegisterSubmit(event) {
    //Call login function
    // username, password
    history.push("/RegistrationScreen");
  }

  return (
    <div className="Login">
      <h1>Welcome to MarketPlace RegistrationScreen!</h1>
      <Form onSubmit={handleRegisterSubmit}>
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
        <Form.Group size="lg" controlId="firstname">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type="firstname"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="lastname">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type="lastname"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="postalcode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="postalcode"
            value={postalcode}
            onChange={(e) => setpostalcode(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="gender"
            value={gender}
            onChange={(e) => setgender(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="createdat">
          <Form.Label>Createdat : Optional</Form.Label>
          <Form.Control
            type="createdat"
            value={createdat}
            onChange={(e) => setcreatedat(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit"
          onPress={handleRegisterSubmit}
          title="Register"
          Label="Register">
          Submit
        </Button>

      </Form>
    </div>
  );
}