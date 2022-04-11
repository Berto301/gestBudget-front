/*eslint react-hooks/exhaustive-deps:off*/

import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import { Input ,DropdownWithLabel} from "../../../../../components/componentsSystems";
import { useRecipe } from "../../../../../hooks";
import {FONT_AWESOME , COLORS} from '../../../../../_helpers/_constants'
import { SketchPicker } from 'react-color'

const Content = ({ passDataToParent, id }) => {
  const { _getById, recipe } = useRecipe();
  useEffect(() => {
    if (id) {
      _getById(id);
    }
  }, [id]);

  const { name, description, estimation, icon , color} = recipe;

  return (
    <div className="pl-lg-4">
      <Row>
        <Col lg="6">
          <Input
            name="name"
            type="text"
            label="Name"
            passData={passDataToParent}
            value={name}
          />
        </Col>
        <Col lg="6">
          <Input
            name="description"
            type="textarea"
            label="Description"
            passData={passDataToParent}
            value={description}
          />
        </Col>
      </Row>
      <Row>
          <Col lg="12">
             <Input
              name="estimation"
              type="number"
              label="Estimation per month (for all society)"
              passData={passDataToParent}
              value={estimation}
            />
          </Col>
        </Row>
      <Row>
        <Col lg="6">
           <DropdownWithLabel
            name="icon"
            label="Icon recipe"
            lists={FONT_AWESOME}
            passData={passDataToParent}
            withIcon = {true}
            value={icon || ""}
          />
        </Col>
        <Col lg="6">
           <DropdownWithLabel
            name="color"
            label="Color recipe"
            lists={COLORS}
            passData={passDataToParent}
            withcolor = {true}
            value={color || ""}
          />
        </Col>
      </Row>
        
    </div>
  );
};

export default Content;
