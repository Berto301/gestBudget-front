import React, { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import Group from "./Group";
import User from "./User";
import { useUser } from "../../../hooks";
import { STRONG_PASSWORD_REGEX } from "../../../_helpers/_constants";
import { isEqual } from "lodash";
import { withNotification } from "../../../hooks/notification.state";

const Register = ({ showError }) => {
  const [dataUsers, setDataUsers] = useState({
    name: "",
    firstname: "",
    phone: "",
    email: "",
    password: "",
    password_check: "",
  });
  const [dataGroups, setDataGroups] = useState({
    name: "",
    areaActivity: "",
    phone: "",
    email: "",
    adress: "",
  });
  const { register } = useUser(); /* Custom Hooks [src/hooks] */
  const getUserData = (params) => {
    setDataUsers(params);
  };
  const getGroupData = (params) => {
    console.log(params);
    setDataGroups(params);
  };

  const onRegister = () => {
    const { name, firstname, phone, email, password, password_check } =
      dataUsers;
    const {
      name: nameGroup,
      areaActivity,
      phone: phoneGroup,
      email: emailGroup,
      adress,
    } = dataGroups;

    const REQUIRED_FIELD = [
      nameGroup,
      //areaActivity,
      name,
      firstname,
      password,
      password_check,
    ];

    let isFormValid = REQUIRED_FIELD.every((item) => Boolean(item));

    if (!isFormValid) {
      // error message
      showError("Please complete the required fields");
      return;
    }
    if (!isEqual(password, password_check)) {
      //error message
      showError("The password fields must be the same.");
      return;
    }
    if (
      !STRONG_PASSWORD_REGEX.test(password) ||
      !STRONG_PASSWORD_REGEX.test(password_check)
    ) {
      //error
      showError(
        "The password must have at least 6 characters including a number, a special character, a lower case letter and an upper case letter."
      );
      return;
    }
    const groups = {
      name: nameGroup,
      phone: phoneGroup,
      activityArea: areaActivity,
      creationDate: new Date(),
      email: emailGroup,
    };
    const users = {
      name,
      firstname,
      phone,
      email,
      password,
      isAdmin: true,
    };
    
    const allData = {
      groups,
      users,
    };
    /* proceed to setup*/
    register(allData);
  };
  return (
    <>
      <Col className="order-xl-1" xl="8">
        <Card className="bg-secondary shadow">
          <CardBody>
            <h6 className="heading-small text-muted mb-4">User information</h6>
            <User passDataToParent={getUserData} />
            <hr className="my-4" />
            {/* Address */}
            <h6 className="heading-small text-muted mb-4">Group information</h6>
            <Group passDataToParent={getGroupData} />
            <hr className="my-4" />
            <div className="text-center">
              <Button
                className="mt-4"
                color="primary"
                type="button"
                onClick={onRegister}
              >
                Create account
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default withNotification(Register);
