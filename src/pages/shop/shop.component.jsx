import React, { useEffect } from "react";
import "./shop.styles.scss";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import { createStructuredSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollectionsStart } from "../../redux/collection/collection.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { selectIsCollectionsLoaded } from "../../redux/collection/collection.selector";
import CollectionsContainer from "../../components/collections-overview/collections-overview.container";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {
  const { isCollectionsLoaded } = useSelector(
    createStructuredSelector({
      isCollectionsLoaded: selectIsCollectionsLoaded,
    })
  );
  const dispatch = useDispatch();

  /**
   * Loads the collections data into
   * the redux reducer.
   */
  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsContainer} />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={!isCollectionsLoaded}
            {...props}
          />
        )}
      />
    </div>
  );
};

export default ShopPage;
