import { ShopActionTypes } from "./collection.types";

const { UPDATE_COLLECTIONS } = ShopActionTypes;

const INITITIAL_STATE = {
  collections: null,
};

export const collectionReducer = (state = INITITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};
