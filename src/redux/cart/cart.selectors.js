import { createSelector } from "reselect";

// input selector
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

/**
 * A memoized selector for storing the number of
 * items that are added to the cart. This ensures that
 * component does not have to rerender all the time.
 */
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
