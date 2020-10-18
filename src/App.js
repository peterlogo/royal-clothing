import React from "react";
import "./App.css";
//import axios from "axios";
import { AuthPage, HomePage, ShopPage } from "./pages";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components";
import { auth, createUserProfileDocument } from "./firebase";
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
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // checks if a user object exists.
      if (userAuth) {
        // get the user reference object from firebase
        const userRef = await createUserProfileDocument(userAuth);
        // retrieve and save user object to state from
        // firebase
        userRef.onSnapshot((snapshot) => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      }
      this.setState({ currentUser: userAuth });
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
