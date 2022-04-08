import { createStore } from "redux";

const initialState = {
  // initialState
  selectedValue:{}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_VALUE":
      return Object.assign({}, state, {
        selectedValue: action.payload,
      });
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
