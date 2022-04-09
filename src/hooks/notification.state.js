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

  return {
    showError,
    showSuccess
  };
}

/**HOC : to wrap all components who needed notification */
const withNotification = WrappedComponent => props => { 
  const {showSuccess, showError} = useNotification();
  return (
    <WrappedComponent
      {...props}
      showError={showError}
      showSuccess={showSuccess}
    />
  );
};

export { useNotification, withNotification };
export default withNotification;