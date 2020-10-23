import { CartTypes } from "./cart.types";

const { TOGGLE_CART_HIDDEN } = CartTypes;

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});
