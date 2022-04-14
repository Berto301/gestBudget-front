import { useState } from "react";
import { Row, Col } from "reactstrap";
import { Input, InputGroup } from "../../../components/componentsSystems";

const User = ({ passDataToParent ,onSubmit}) => {
  const [dataUsers, setDataUsers] = useState({
    name: "",
    firstname: "",
    phone: "",
    email: "",
    password: "",
    password_check: "",
  });
  const getData = (updatedAttrs) => {
    setDataUsers((temp) => ({
      ...temp,
      ...updatedAttrs,
    }));
  };
  return (
    <div className="pl-lg-4" onMouseLeave={() => passDataToParent(dataUsers)}>
      <Row>
        <Col lg="6">
          <Input
            name="name"
            type="text"
            label="First name"
            passData={getData}
            onSubmit={onSubmit}
            required={true}
          />
        </Col>
        <Col lg="6">
          <Input
            name="firstname"
            type="text"
            label="Last name"
            passData={getData}
            onSubmit={onSubmit}
            required={true}
          />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <Input name="phone" type="text" label="Phone" passData={getData} />
        </Col>
        <Col lg="6">
          <Input
            name="email"
            type="email"
            label="Email address"
            passData={getData}
            onSubmit={onSubmit}
            required={true}
          />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <InputGroup
            name="password"
            type="password"
            label="Password"
            passData={getData}
            icon="ni ni-lock-circle-open"
            autoComplete="new-password"
            onSubmit={onSubmit}
            required={true}
          />
        </Col>

        <Col lg="6">
          <InputGroup
            name="password_check"
            type="password"
            label="Password check"
            passData={getData}
            icon="ni ni-lock-circle-open"
            autoComplete="new-password"
            onSubmit={onSubmit}
            required={true}
          />
        </Col>
      </Row>
    </div>
  );
};

export default User;
