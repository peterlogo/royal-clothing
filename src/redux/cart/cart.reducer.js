import { CartTypes } from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

/**
 * Cart item initial state
 * properties
 * @object
 */
const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
};

const {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
} = CartTypes;

/**
 * Cart reducer handling the states of the cart
 * and its items.
 * @param {object} state
 * @param {*} action
 */
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
    case REMOVE_ITEM:
      const curr_Items = [...state.cartItems];
      const new_Items = removeItemFromCart(curr_Items, action.payload);
      console.log(curr_Items, new_Items);
      return {
        ...state,
        currentItem: new_Items,
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
