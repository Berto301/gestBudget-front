import { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import UserInformation from "./subComponents/UserInformations";
import GroupInfo from "./subComponents/GroupInfo";
import Profile from "./subComponents/Profile";
import { useUser, useGroup } from "../../../hooks";

const Index = (props) => {
  const { _getById, usersConnected } = useUser();
  const { _getById: _getGroupById, groups } = useGroup();
  const [dataUsers, setDataUSers] = useState({});
  const [dataGroups, setDataGroups] = useState({});
  useEffect(() => {
    async function didMount() {
      const groupId = localStorage.getItem("groupId") || null;
      await _getById(localStorage.getItem("userId"));
      if (groupId) await _getGroupById(groupId);
    }
    didMount();
  }, []);
  useEffect(() => {
    if (usersConnected?._id) setDataUSers(usersConnected);
  }, [usersConnected]);
  useEffect(() => {
    if (groups?._id) setDataGroups(groups);
  }, [groups]);

  return (
    <>
      <UserHeader
        name={`${usersConnected?.name} ${usersConnected?.firstname}`}
        isAdmin={usersConnected?.isAdmin}
      />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Profile name={`${usersConnected?.name} ${usersConnected?.firstname}`} isAdmin={usersConnected?.isAdmin}/>
          <Col className="order-xl-1" xl="8">
            <div className="mb-2">
              <UserInformation users={dataUsers} />
            </div>
            <GroupInfo groups={dataGroups} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
