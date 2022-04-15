/*eslint react-hooks/exhaustive-deps:off*/
import React, { useEffect } from "react";
import { useRecipeBySociety } from "../../../../hooks";
import {
  Input,
  SpecificDropdown,
} from "../../../../components/componentsSystems";
import moment from "moment";

const ItemsTable = ({ id, index, isPrint }) => {
  const { _getById, recipe } = useRecipeBySociety();
  useEffect(() => {
    if (id) {
      _getById(id);
    }
  }, [id]);
  /*Update this file is so complexe  [More reflexion but have no time ]*/
  return (
    <tr style={{ height: "20px" }}>
      <th scope="row">{index + 1}</th>
      <td>
        {isPrint ? (
          <>{moment(new Date(recipe?.date)).format("DD/MM/YYYY")}</>
        ) : (
          <Input
            name="date"
            type="date"
            //label="Date"
            //passData={passDataToParent}
            value={recipe?.date}
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
          isRecipe={true}
          //passEstimation={getEstimation}
          //onSubmit={onSubmit}
          required={true}
          value={recipe?.recipeId}
          disabled={true}
          isPrint={isPrint}
        />
      </td>
      <td>
        {isPrint ? (
          <>{recipe?.realValue}</>
        ) : (
          <Input
            name="realValue"
            type="number"
            //label="Value"
            // passData={passDataToParent}
            //onSubmit={onSubmit}
            required={true}
            value={recipe?.realValue}
            disabled={true}
          />
        )}
      </td>
    </tr>
  );
};

export default ItemsTable;
