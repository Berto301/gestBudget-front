/*eslint react-hooks/exhaustive-deps:off*/
import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
//import {useSelector} from 'react-redux'
import { Input, Dropdown } from "../../../../../components/componentsSystems";
import {
  lists,
  MANAGEMENT_STYLES,
  LAWER_FORMS,
  BANK,
  STRUCTURES,
} from "../../../../../_helpers/_constants";
import { useSociety, useGroup } from "../../../../../hooks";

const Society = ({ passDataToParent, id }) => {
  const { _getById, _society } = useSociety();
  const { _getById: _getGroupId, groups } = useGroup();

  useEffect(() => {
    if (id) {
      _getById(id);
    }
  }, [id]);

  useEffect(() => {
    async function didMount() {
      const groupId = localStorage.getItem("groupId") || null;
      if (groupId) await _getGroupId(groupId);
    }
    didMount();
  }, []);

  const arrangeLists = (list) => {
    const tempLists = [];
    if (groups?.activityArea) {
      if (list?.length) {
        for (let item of list) {
          if (item?.name === groups?.activityArea) {
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
    <div className="pl-lg-4">
      <h3>Entreprise informations </h3>
      <Row>
        <Col md="4">
          <Input
            name="immatriculation"
            type="text"
            label="Matricule number"
            passData={passDataToParent}
            value={_society?.immatriculation || ""}
          />
        </Col>
        <Col md="4">
          <Input
            name="nameSociety"
            type="text"
            label="Name"
            passData={passDataToParent}
            value={_society?.name || ""}
          />
        </Col>
        <Col md="4">
          <Dropdown
            name="type"
            label="Type"
            lists={areaActivityLists}
            passData={passDataToParent}
            value={_society?.type || ""}
          />
        </Col>
      </Row>
      <Row>
        <Col lg="4">
          <Input
            name="creationDate"
            type="date"
            label="creationDate"
            passData={passDataToParent}
            value={_society?.creationDate || ""}
          />
        </Col>
        <Col lg="4">
          <Input
            name="emailSociety"
            type="text"
            label="Email"
            passData={passDataToParent}
            value={_society?.email || ""}
          />
        </Col>
        <Col lg="4">
          <Input
            name="phoneSociety"
            type="text"
            label="Phone"
            passData={passDataToParent}
            value={_society?.phone || ""}
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
            passData={passDataToParent}
            value={_society?.accountBank || ""}
          />
        </Col>
        <Col md="4">
          <Dropdown
            name="bank"
            label="Bank"
            lists={BANK}
            passData={passDataToParent}
            value={_society?.bank || ""}
          />
        </Col>
        <Col md="4">
          <Input
            name="turnover"
            type="number"
            label="Turnover"
            passData={passDataToParent}
            value={_society?.turnover || ""}
          />
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <Dropdown
            name="structure"
            label="Structure"
            lists={STRUCTURES}
            passData={passDataToParent}
            value={_society?.structure || ""}
          />
        </Col>
        <Col md="4">
          <Dropdown
            name="managementStyle"
            label="Management"
            lists={MANAGEMENT_STYLES}
            passData={passDataToParent}
            value={_society?.managementStyle || ""}
          />
        </Col>
        <Col md="4">
          <Dropdown
            name="lawerForm"
            label="Lawer Form"
            lists={LAWER_FORMS}
            passData={passDataToParent}
            value={_society?.lawerForm || ""}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Society;
