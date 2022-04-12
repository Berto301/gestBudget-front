import { useState, useEffect } from "react";
import { Button, Card, CardBody, Row, Col, CardFooter } from "reactstrap";
import { Input } from "../../../../components/componentsSystems";
import { useGroup } from "../../../../hooks";

const GroupInfo = ({ groups, isAdmin }) => {
  const { _update } = useGroup();
  const [groupData, setGroupData] = useState({
    name: "",
    activityArea: "",
    email: "",
    phone: "",
  });

  const getData = (updatedAttrs) => {
    setGroupData((temp) => ({
      ...temp,
      ...updatedAttrs,
    }));
  };

  useEffect(() => {
    if (groups) {
      setGroupData(groups);
    }
  }, [groups]);

  const OnUpdate = () => {
    _update(groupData);
  };

  const { name, activityArea, email, phone } = groupData;
  return (
    <>
      <Card className="bg-secondary shadow">
        <CardBody>
          <h6 className="heading-small text-muted mb-4">GROUP INFORMATION</h6>
          <div className="pl-lg-4">
            <Row>
              <Col lg="6">
                <Input
                  name="name"
                  type="text"
                  label="Group name"
                  passData={getData}
                  value={name}
                  disabled={isAdmin}
                />
              </Col>
              <Col lg="6">
                <Input
                  name="email"
                  type="text"
                  label="Email"
                  passData={getData}
                  value={email}
                  disabled={isAdmin}
                />
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <Input
                  name="phone"
                  type="text"
                  label="Phone"
                  passData={getData}
                  value={phone}
                  disabled={isAdmin}
                />
              </Col>
              <Col lg="6">
                <Input
                  name="activityArea"
                  type="text"
                  label="Activy Area"
                  passData={getData}
                  value={activityArea}
                  disabled={isAdmin}
                />
              </Col>
            </Row>
          </div>
          <hr className="my-4" />
        </CardBody>
        {!isAdmin ? (
          <CardFooter className="bg-white border-0">
            <Row className="align-items-center">
              <Button
                color="primary"
                href="#pablo"
                onClick={OnUpdate}
                size="sm"
              >
                Update
              </Button>
            </Row>
          </CardFooter>
        ) : (
          ""
        )}
      </Card>
    </>
  );
};

export default GroupInfo;
