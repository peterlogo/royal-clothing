import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import DATA from "./directory.data";
import "./directory.styles.scss";

export class Driectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
