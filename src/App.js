import React from "react";
import "./App.css";
import { HomePage, ShopPage } from "./pages";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
