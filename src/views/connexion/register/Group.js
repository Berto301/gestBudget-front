import React, { useState } from "react";
import { Row, Col } from "reactstrap";
//import {useSelector} from 'react-redux'
import { Input, Dropdown } from "../../../components/componentsSystems";
import { lists } from "../../../_helpers/_constants";

const Group = ({ passDataToParent, onSubmit }) => {
  // let selectValue = useSelector((state) => state.selectedValue) || {};
  const [dataGroups, setDataGroups] = useState({
    name: "",
    areaActivity: "",
    phone: "",
    email: "",
  });
  const getData = (updatedAttrs) => {
    console.log(updatedAttrs);
    setDataGroups((temp) => ({
      ...temp,
      ...updatedAttrs,
    }));
  };

  const arrangeLists = (list) => {
    const tempLists = [];
    if (list?.length) {
      for (let item of list) {
        tempLists.push(item.name);
      }
    }
    return tempLists;
  };
  const areaActivityLists = arrangeLists(lists) || [];

  return (
    <div className="pl-lg-4" onMouseLeave={() => passDataToParent(dataGroups)}>
      <Row>
        <Col md="6">
          <Input
            name="name"
            type="text"
            label="Name"
            passData={getData}
            onSubmit={onSubmit}
            required={true}
          />
        </Col>
        <Col md="6">
          <Dropdown
            name="areaActivity"
            label="Area Activity"
            lists={areaActivityLists}
            passData={getData}
          />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <Input name="email" type="text" label="Email" passData={getData} />
        </Col>
        <Col lg="6">
          <Input name="phone" type="text" label="Phone" passData={getData} />
        </Col>
      </Row>
    </div>
  );
};

export default Group;
