import { CartTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
};

const { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART } = CartTypes;

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
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
