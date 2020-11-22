import React from "react";
import Driectory from "../../components/directory/directory.component";
import { HomePageContainer } from "./home.styles";
import "./homepage.styles.scss";

export const HomePage = (props) => {
  return (
    <HomePageContainer>
      <Driectory />
    </HomePageContainer>
  );
};
