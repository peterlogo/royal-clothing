import { createSelector } from "reselect";
import { memoize } from "lodash";

const selectShop = (state) => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopCollection],
    (collections) => collections[collectionUrlParam]
  )
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollection],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
