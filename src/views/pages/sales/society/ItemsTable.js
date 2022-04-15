/*eslint react-hooks/exhaustive-deps:off*/
import React, { useEffect } from "react";
import { useSalesBySociety } from "../../../../hooks";
import {
  Input,
  SpecificDropdown,
} from "../../../../components/componentsSystems";

import moment from "moment";

const ItemsTable = ({ id, index, isPrint }) => {
  const { _getById, sale } = useSalesBySociety();
  useEffect(() => {
    if (id) {
      _getById(id);
    }
  }, [id]);
  /*Update this file is so complexe  [More reflexion but have no time ] because of group of id*/
  console.log(sale);
  return (
    <tr style={{ height: "20px" }}>
      <th scope="row">{index + 1}</th>
      <td>
        {isPrint ? (
          <>{moment(new Date(sale?.date)).format("DD/MM/YYYY")}</>
        ) : (
          <Input
            name="date"
            type="date"
            //label="Date"
            //passData={passDataToParent}
            value={sale?.date}
            //onSubmit={onSubmit}
            required={true}
            disabled={true}
          />
        )}
      </td>
      <td>
        <SpecificDropdown
          name="_idSelected"
          //label="Sales"
          //passData={passDataToParent}
          isRecipe={false}
          //passEstimation={getEstimation}
          //onSubmit={onSubmit}
          required={true}
          value={sale?.salesId}
          disabled={true}
          isPrint={isPrint}
        />
      </td>
      <td>
        {isPrint ? (
          <>{sale?.realValue}</>
        ) : (
          <Input
            name="realValue"
            type="number"
            //label="Value"
            // passData={passDataToParent}
            //onSubmit={onSubmit}
            required={true}
            value={sale?.realValue}
            disabled={true}
          />
        )}
      </td>
    </tr>
  );
};

export default ItemsTable;
