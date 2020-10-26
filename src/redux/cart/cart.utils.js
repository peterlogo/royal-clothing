/**
 * Utitlity function to check for already existing items as
 * well as updating the cart items and their quantities.
 * @param {Array} cartItems
 * @param {object} cartItemToAdd
 * @returns {Array}
 */
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

/**
 * Utility function to remove an existing item from
 * the cart as well as its quantiy.
 * @param {object} cartItems
 * @param {object} cartItemToRemove
 * @returns {object}
 */
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  console.log(cartItemToRemove);
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
