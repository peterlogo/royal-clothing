import React from "react";
import { SignIn, SignUp } from "../../components";
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
