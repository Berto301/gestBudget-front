import { useState, useEffect } from "react";
import { Button, Card, CardBody, Row, Col, CardFooter } from "reactstrap";
import { useSociety , useNotification } from "../../../../hooks";
import { Input, Dropdown } from "../../../../components/componentsSystems";
import {
  MANAGEMENT_STYLES,
  LAWER_FORMS,
  BANK,
  STRUCTURES,
  lists
} from "../../../../_helpers/_constants";

const SocietyInfo = ({ society , activityArea}) => {
  const { _update } = useSociety();
  const {showError} =useNotification()
  const [onSubmit,setOnSubmit] = useState(false)
  const [societyData, setSocietyData] = useState({
    _id: localStorage.getItem("societyId"),
    name: "",
    type: "",
    phone: "",
    email: "",
    creationDate: "",
    lawerForm: "",
    managementStyle: "",
    accountBank: "",
    bank: "",
    immatriculation: "",
    structure: "",
    turnover: "",
    adminId: localStorage.getItem("userId"),
    groupId: localStorage.getItem("groupId"),
  });

  const {
    name,
    type,
    email,
    phone,
    creationDate,
    lawerForm,
    managementStyle,
    accountBank,
    bank,
    immatriculation,
    structure,
    turnover,
  } = societyData;

  const getData = (updatedAttrs) => {
    setSocietyData((temp) => ({
      ...temp,
      ...updatedAttrs,
    }));
  };

  useEffect(() => {
    if (society) {
      setSocietyData(society);
    }
  }, [society]);

  const OnUpdate = () => {
    setOnSubmit(true)
    if(!immatriculation || !name || !turnover) return showError("Please complete all required fields")
    _update(societyData);
  };

  const arrangeLists = (list) => {
    const tempLists = [];
    if (activityArea) {
      if (list?.length) {
        for (let item of list) {
          if (item?.name === activityArea) {
            if (item?.type?.length) {
              for (let type of item?.type) {
                tempLists.push(type);
              }
            }
          }
        }
      }
    }
    return tempLists;
  };
  const areaActivityLists = arrangeLists(lists) || [];

  
  return (
    <>
      <Card className="bg-secondary shadow">
        <CardBody>
          <h6 className="heading-small text-muted mb-4">SOCIETY INFORMATION</h6>
          <div className="pl-lg-4">
            <Row>
              <Col md="4">
                <Input
                  name="immatriculation"
                  type="text"
                  label="Matricule (NIF/STAT)"
                  passData={getData}
                  value={immatriculation || ""}
                  required={true}
                  onSubmit={onSubmit}
                />
              </Col>
              <Col md="4">
                <Input
                  name="name"
                  type="text"
                  label="Name"
                  passData={getData}
                  value={name || ""}
                  onSubmit={onSubmit}
                  required={true}
                />
              </Col>
              <Col md="4">
                <Dropdown
                  name="type"
                  label="Type"
                  lists={areaActivityLists}
                  passData={getData}
                  value={type || ""}
                />
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <Input
                  name="creationDate"
                  type="date"
                  label="creationDate"
                  passData={getData}
                  value={creationDate || ""}
                />
              </Col>
              <Col lg="4">
                <Input
                  name="email"
                  type="text"
                  label="Email"
                  passData={getData}
                  value={email || ""}
                />
              </Col>
              <Col lg="4">
                <Input
                  name="phone"
                  type="text"
                  label="Phone"
                  passData={getData}
                  value={phone || ""}
                />
              </Col>
            </Row>
            <h3>Additionnal informations </h3>
            <Row>
              <Col md="4">
                <Input
                  name="accountBank"
                  type="text"
                  label="Account Bank"
                  passData={getData}
                  value={accountBank || ""}
                />
              </Col>
              <Col md="4">
                <Dropdown
                  name="bank"
                  label="Bank"
                  lists={BANK}
                  passData={getData}
                  value={bank || ""}
                />
              </Col>
              <Col md="4">
                <Input
                  name="turnover"
                  type="number"
                  label="Turnover"
                  passData={getData}
                  value={turnover || ""}
                  onSubmit={onSubmit}
                  required={true}
                />
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Dropdown
                  name="structure"
                  label="Structure"
                  lists={STRUCTURES}
                  passData={getData}
                  value={structure || ""}
                />
              </Col>
              <Col md="4">
                <Dropdown
                  name="managementStyle"
                  label="Management"
                  lists={MANAGEMENT_STYLES}
                  passData={getData}
                  value={managementStyle || ""}
                />
              </Col>
              <Col md="4">
                <Dropdown
                  name="lawerForm"
                  label="Lawer Form"
                  lists={LAWER_FORMS}
                  passData={getData}
                  value={lawerForm || ""}
                />
              </Col>
            </Row>
          </div>
          <hr className="my-4" />
        </CardBody>
        <CardFooter className="bg-white border-0">
          <Row className="align-items-center">
            <Button color="primary" href="#pablo" onClick={OnUpdate} size="sm">
              Update
            </Button>
          </Row>
        </CardFooter>
      </Card>
    </>
  );
};

export default SocietyInfo;
