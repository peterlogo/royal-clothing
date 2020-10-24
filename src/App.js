import React from "react";
import "./App.css";
//import axios from "axios";
import { AuthPage, HomePage, ShopPage } from "./pages";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase";
import { Component } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";

class App extends Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
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
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      setCurrentUser(userAuth);
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
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <AuthPage />
            }
          />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </>
    );
  }
}

/**
 * Applies the redux action.
 */
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

/**
 * Gets the initial state of the user.
 * @param {*} param0
 */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
