import React from "react";
import Login from "./screens/LoginScreen";
//import SignUpScreen from "./src/screens/SignUpScreen";
//import ProductPageScreen from "./src/screens/ProductPageScreen";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Route exact path="/">
          <Login />
        </Route>
      </div>
    );
  }
}

export default App;
