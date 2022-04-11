// reactstrap components
import React from "react";

const HeadTable = () => {
  return (
    <thead className="thead-light">
      <tr>
        <th scope="col">Recipe name</th>
        <th scope="col">Estimation per month</th>
        <th scope="col">Description </th>
        {/*<th scope="col">Others</th>*/}
        <th scope="col" />
      </tr>
    </thead>
  );
};

export default HeadTable;
