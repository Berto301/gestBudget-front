import React, { useState, useEffect} from 'react';
import {Table} from 'reactstrap'
import {useSalesBySociety} from "../../../../hooks"
import { Col } from "reactstrap";
import {
  Input,
  SpecificDropdown
} from "../../../../components/componentsSystems";

const ids = ['1']
const ItemsTable = ({id,index})=>{

  const{_getById ,sale} = useSalesBySociety()
  useEffect(()=>{
    if(id){
      _getById(id)
    }

  },[id])
 /*Update this file is so complexe  [More reflexion but have no time ] because of group of id*/
  return(    
      <tr>
        <th scope="row">{index+1}</th>
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
                value={sale?.realValue}
                disabled={true}
            />
        </td>
        <td>
            <Input
              name="date"
              type="date"
              //label="Date"
              //passData={passDataToParent}
              //onSubmit={onSubmit}
              required={true}
              value={sale?.date}
              disabled={true}
            />
        </td>
      </tr>
   
    )
}



export default ItemsTable