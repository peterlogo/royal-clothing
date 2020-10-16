import React from "react";
import "./App.css";
import { AuthPage, HomePage, ShopPage } from "./pages";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={AuthPage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
