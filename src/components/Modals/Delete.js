// reactstrap components
import React from "react";

const HeadTable = ({object,others}) => {
  return (
    <div className="content-modal-delete">
        <h3 className="text-center">Are you sure to delete  {object} ?</h3>
        {others ? <div className="text-center">(<i className="fas fa-exclamation-triangle text-danger mr-2"/><i><span className="others-description"> {others}</span></i>)</div> :" "}
    </div>
  );
};

export default HeadTable;
