import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "redux";
import { selectCollectionIsFetching } from "../../redux/collection/collection.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isFetching: selectCollectionIsFetching,
});

/**
 * A Container pattern that wraps the component,
 * using compose to perform a curry function which
 * loads the inner function from the inside first.
 * This calls the inner function first and passes in
 * the state from the reducer after the inner function
 * has been called. [ Higher Order Component ]
 */
const CollectionsContainer = compose(
  connect(mapStateToProps)(WithSpinner(CollectionsOverview))
);

export default CollectionsContainer;
