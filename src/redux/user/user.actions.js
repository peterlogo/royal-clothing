import { UserActionTypes } from "./user.types";

const { SET_CURRENT_USER } = UserActionTypes;

/**
 * Updates the user object within the
 * application.
 * @param {*} user
 * @returns {object}
 */

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});
