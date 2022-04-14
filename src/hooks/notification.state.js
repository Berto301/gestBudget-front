import React from "react";
import { useDispatch } from "react-redux";
import {
  setNotificationError,
  setNotificationSuccess,
} from '../_helpers/_functions';

const useNotification = () => {


  const dispatch = useDispatch();

  const showError = (message) => {
    setNotificationError(dispatch, message);
  }

  const showSuccess = (message) => {
    setNotificationSuccess(dispatch,message);
  }
  const clearReduxDispatch = () => {
    dispatch({
      type: "STANDARD_NOTIFICATION",
      payload: null,
    });
  };

  return {
    showError,
    showSuccess,
    clearReduxDispatch
  };
}


/**HOC : to wrap all components who needed notification */
const withNotification = WrappedComponent => props => { 
  const {showSuccess, showError,clearReduxDispatch} = useNotification();
  return (
    <WrappedComponent
      {...props}
      showError={showError}
      showSuccess={showSuccess}
      clearReduxDispatch={clearReduxDispatch}
    />
  );
};

export { useNotification, withNotification };
export default withNotification;