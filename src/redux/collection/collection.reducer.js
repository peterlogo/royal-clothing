import SHOP_DATA from "../../pages/shop/shopdata";

const INITITIAL_STATE = {
  collections: SHOP_DATA,
};

export const collectionReducer = (state = INITITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
