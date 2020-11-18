import React, { useEffect, useState } from "react";
import "./shop.styles.scss";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {
  storage,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { updateCollections } from "../../redux/collection/collection.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  /**
   * Loads the collections data into
   * the redux reducer.
   */
  useEffect(() => {
    // Gets the collections data reference from Firebase firestore.
    const collectionRef = storage.collection("collections");
    // Gets the data from the collection.
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(updateCollections(collectionsMap));
      setLoading(false);
    });
    //unsubscribeFromSnapshot();
    // Clean up expression.
    return () => {
      //unsubscribeFromSnapshot = null;
    };
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

export default ShopPage;
