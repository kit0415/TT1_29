import React from "react";
import Login from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import ProductPageScreen from "./screens/ProductPageScreen";
import { Route, Switch } from "react-router-dom";


export default function App() {



  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/LoginScreen" component={Login} />
        <Route path="/RegistrationScreen" component={RegistrationScreen} />
        <Route path="/ProductPageScreen" component={ProductPageScreen} />
      </Switch>
    </div >
  );
}

