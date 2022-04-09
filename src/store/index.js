import { createStore } from "redux";

const initialState = {
  // initialState
  selectedValue:{},
  standardNotification:null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_VALUE":
      return Object.assign({}, state, {
        selectedValue: action.payload,
      });
    case "STANDARD_NOTIFICATION":
      return Object.assign({}, state, {
        standardNotification: action.payload,
      });
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
