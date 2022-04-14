/*eslint react-hooks/exhaustive-deps:off*/

import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import {
  Input,
  DropdownWithLabel,
} from "../../../../../components/componentsSystems";
import { useSales } from "../../../../../hooks";
import { FONT_AWESOME, COLORS } from "../../../../../_helpers/_constants";

const Content = ({ passDataToParent, id ,onSubmit}) => {
  const { _getById, sale } = useSales();
  useEffect(() => {
    if (id) {
      _getById(id);
    }
  }, [id]);

  const { name, description, estimation, icon, color } = sale;

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
            onSubmit={onSubmit}
            required={true}
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
            onSubmit={onSubmit}
            required={true}
          />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <DropdownWithLabel
            name="icon"
            label="Icon sales"
            lists={FONT_AWESOME}
            passData={passDataToParent}
            withIcon={true}
            value={icon || ""}
          />
        </Col>
        <Col lg="6">
          <DropdownWithLabel
            name="color"
            label="Color sales"
            lists={COLORS}
            passData={passDataToParent}
            withcolor={true}
            value={color || ""}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Content;
