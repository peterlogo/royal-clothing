import { CartTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const { TOGGLE_CART_HIDDEN, ADD_ITEM } = CartTypes;

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      const currentItems = [...state.cartItems];
      const updatedItems = addItemToCart(currentItems, action.payload);
      return {
        ...state,
        cartItems: updatedItems,
      };
    default:
      return state;
  }
};