import React from "react";
import { SignUp } from "../../components";
import SignIn from "../../components/sign-in/sign-in.component";
import "./auth.styles.scss";

export const AuthPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <h1>Sign In</h1>
      <SignIn />
      <SignUp />
    </div>
  );
};
