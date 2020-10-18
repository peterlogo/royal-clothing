import React from "react";
import "./App.css";
//import axios from "axios";
import { AuthPage, HomePage, ShopPage } from "./pages";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components";
import { auth } from "./firebase";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    // listens for authentication.
    // this is an open subsrciption.
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    // closes the subscription after,
    // the component has unmounted.
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={AuthPage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </>
    );
  }
}

export default App;
