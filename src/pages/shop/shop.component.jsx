import React from "react";
import { PreviewCollection } from "../../components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./shop.styles.scss";
import { selectShopCollection } from "../../redux/collection/collection.selector";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollection,
});

export default connect(mapStateToProps)(ShopPage);
