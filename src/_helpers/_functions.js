/*function*/
import { useDispatch } from "react-redux";
import { ERROR, SUCCESS } from "./_constants";
export const setNotificationError = (dispatch, message, delay = 0) => {
  setTimeout(() => {
    dispatch({
      type: "STANDARD_NOTIFICATION",
      payload: {
        type: ERROR,
        message,
      },
    });
  }, delay);
};

export const setNotificationSuccess = (dispatch, message, delay = 0) => {
  setTimeout(() => {
    dispatch({
      type: "STANDARD_NOTIFICATION",
      payload: {
        type: SUCCESS,
        message,
      },
    });
  }, delay);
};

// export const clearReduxDispatch = () =>{
//   const reduxDispatch = useDispatch
//   return useDispatch({
//           type: "STANDARD_NOTIFICATION",
//           payload: null,
//         });
// }
