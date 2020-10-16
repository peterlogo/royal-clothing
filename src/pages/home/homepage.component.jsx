import React from "react";
import { Driectory } from "../../components/directory/directory.component";
import "./homepage.styles.scss";

export const HomePage = (props) => {
  console.log(props);
  return (
    <div className="homepage">
      <Driectory />
    </div>
  );
};
