import React, { Component } from "react";
import { PreviewCollection } from "../../components";
import DATA from "./shopdata";
import "./shop.styles.scss";

export class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProps }) => (
          <PreviewCollection key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
