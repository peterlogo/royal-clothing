import React from "react";
import { SignIn } from "../../components";
import "./auth.styles.scss";

export const AuthPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <h1>Sign In</h1>
      <SignIn />
    </div>
  );
};
