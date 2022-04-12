/*eslint react-hooks/exhaustive-deps:off*/

import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import {
  Input,
  Dropdown,
} from "../../../../components/componentsSystems";
import { useSales } from "../../../../hooks";
import {  COLORS } from "../../../../_helpers/_constants";

const Content = ({ passDataToParent, id }) => {
  const { _getById, sale,sales } = useSales();
  useEffect(() => {
    if (id) {
      _getById(id);
    }
  }, [id]);

  const { name, realValue, estimation, date } = sale;

  return (
    <div className="pl-lg-4">
      <Row>
        <Col lg="6">
          <Dropdown
            name="_id"
            label="Sales"
            lists={sales}
            passData={passDataToParent}
            withcolor={true}
            value={name || ""}
          />
          <Col lg="6">
            <Input
              name="date"
              type="date"
              label="Date"
              passData={passDataToParent}
              value={date}
            />
          </Col>
        </Col>
      </Row>

      <Row>
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
        <Col lg="6">
            <Input
                name="realValue"
                type="number"
                label="Value"
                passData={passDataToParent}
                value={realValue}
            />
        </Col>
      </Row>
    </div>
  );
};

export default Content;
