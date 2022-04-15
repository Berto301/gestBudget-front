import React from "react";
import { Table } from "reactstrap";
import Items from "./ItemsTable";
import { Dimensions } from "../../../../_helpers/_constants";

const EditTable = ({ id, isPrint, idToPrint, total }) => {
  return (
    <Table
      id={idToPrint}
      style={{
        width: `${Dimensions[4]?.width}`,
        minHeight: "200px", //`${Dimensions[4]?.height}`
        height:"100%"
      }}
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Recipes</th>
          <th>Value</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {id?.map((item, index) => {
          return <Items id={item} index={index} isPrint={isPrint} />;
        })}

        {isPrint ? (
          <tr style={{height:"20px"}}>
            <th>Total</th>
            <td></td>
            <td></td>
            <td>{total}Ar</td>
          </tr>
        ) : (
          ""
        )}
      </tbody>
    </Table>
  );
};

export default EditTable;
