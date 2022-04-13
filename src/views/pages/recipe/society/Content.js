/*eslint react-hooks/exhaustive-deps:off*/

import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import {
  Input,
  SpecificDropdown
} from "../../../../components/componentsSystems";
import { useRecipe } from "../../../../hooks";

const Content = ({ passDataToParent, id }) => {
  const [ estimation , setEstimation] = useState("")

  const { _getById, recipe } = useRecipe();

  useEffect(() => {
    if (id) {
      _getById(id);
    }
  }, [id]);

  const getEstimation = (data) => {
    setEstimation(data)
  }

  const { name, realValue, date , description} = recipe;

  return (
    <div className="pl-lg-4">
      <Row>
        <Col lg="6">
          <SpecificDropdown
            name="_idSelected"
            label="Sales"
            passData={passDataToParent}
            value={name || ""}
            isRecipe={true}
            passEstimation={getEstimation}
          />
        </Col>
        <Col lg="6">
            <Input
              name="date"
              type="date"
              label="Date"
              passData={passDataToParent}
              value={date}
            />
          </Col>
      </Row>

      <Row>
        <Col lg="6">
            <Input
                name="realValue"
                type="number"
                label="Value"
                passData={passDataToParent}
                value={realValue}
            />
        </Col>
        <Col lg="6">
          <Input
            name="estimation"
            type="number"
            label="Estimation per month"
            passData={passDataToParent}
            value={estimation}
            disabled={true}
          />
        </Col>
      </Row>

      <Row>
        <Col lg="12">
          <Input
            name="description"
            type="textarea"
            label="Details"
            passData={passDataToParent}
            value={description}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Content;
