import React from "react";
import "./App.css";
//import axios from "axios";
import { AuthPage, HomePage } from "./pages";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import { Component } from "react";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout.component";
import ShopPage from "./pages/shop/shop.component";

class App extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
          />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
      </>
    );
  }
}

/**
 * Gets the initial state of the user.
 * @param {*} param0
 */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
