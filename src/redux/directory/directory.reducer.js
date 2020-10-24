import DATA from "../../components/directory/directory.data";

const INITIAL_STATE = {
  sections: DATA,
};

export const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
