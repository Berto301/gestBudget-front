import React, { useState, useEffect} from 'react';
import {Table} from 'reactstrap'
import {useRecipeBySociety} from "../../../../hooks"
import { Col } from "reactstrap";
import {
  Input,
  SpecificDropdown
} from "../../../../components/componentsSystems";

const ids = ['1']
const ItemsTable = ({id,index})=>{

  // const [recipeData,setRecipeData] = useState({

  // })  
  const{_getById ,recipe} = useRecipeBySociety()
  useEffect(()=>{
    if(id){
      _getById(id)
    }

  },[id])
 /*Update this file is so complexe  [More reflexion but have no time ]*/
  return(    
      <tr>
        <th scope="row">{index+1}</th>
        <td>
          <SpecificDropdown
            name="_idSelected"
            //label="Sales"
            //passData={passDataToParent}
            isRecipe={true}
            //passEstimation={getEstimation}
            //onSubmit={onSubmit}
            required={true}
            isRecipe={true}
            value={recipe?.recipeId}
            disabled={true}
          />

        </td>
        <td>
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
        </td>
        <td>
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
        </td>
      </tr>
   
    )
}



export default ItemsTable