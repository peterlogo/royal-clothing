import { ShopActionTypes } from "./collection.types";

const {
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_START,
} = ShopActionTypes;

const INITITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

export const collectionReducer = (state = INITITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
