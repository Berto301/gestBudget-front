/*eslint react-hooks/exhaustive-deps:off*/
import { useState, useEffect } from "react";
// reactstrap components
import { Card, Table, Container, Row } from "reactstrap";
import Header from "../../../../components/Headers/HeaderBase.js";
import HeadTable from "../subComponents/HeadTable.js";
import Items from "./items.js";
import { useNotification, useUser, useSociety } from "../../../../hooks/";
import AddSociety from "./addSociety";
import { STRONG_PASSWORD_REGEX } from "../../../../_helpers/_constants";
import { socket } from "../../../../_helpers/socket";

const Index = () => {
  const { showError } = useNotification();
  const { register, setCloseModal, closeModal } = useUser();
  const[onSubmit,setOnSubmit] = useState(false)
  const { getByGroupId, societyLists } = useSociety();
  const [data, setData] = useState({
    name: "",
    firstname: "",
    phone: "",
    email: "",
    password: "",
    nameSociety: "",
    type: "",
    phoneSociety: "",
    emailSociety: "",
    creationDate: "",
    lawerForm: "",
    managementStyle: "",
    accountBank: "",
    bank: "",
    immatriculation: "",
    structure: "",
    turnover: "",
  });

  useEffect(() => {
    async function didMount() {
      await getByGroupId(localStorage.getItem("groupId"));
    }
    /**Real time by group */
    socket.on("reload_information", async (groupId) => {
      if (localStorage.getItem("groupId") === groupId) {
        await getByGroupId(localStorage.getItem("groupId"));
      }
    });
    didMount();
  }, []);

  const getAllData = (updatedAttrs) => {
    setData((temp) => ({
      ...temp,
      ...updatedAttrs,
    }));
  };
  const onSave = () => {
    setOnSubmit(true)
    const {
      name,
      firstname,
      phone,
      email,
      password,
      nameSociety,
      type,
      phoneSociety,
      emailSociety,
      creationDate,
      lawerForm,
      managementStyle,
      accountBank,
      bank,
      immatriculation,
      structure,
      turnover,
    } = data;

    const REQUIRED_FIELD = [
      nameSociety,
      name,
      firstname,
      password,
      immatriculation,
      turnover,
      email,
    ];

    let isFormValid = REQUIRED_FIELD.every((item) => Boolean(item));

    if (!isFormValid) {
      // error message
      showError("Please complete the required fields");
      return;
    }
    if (!STRONG_PASSWORD_REGEX.test(password)) {
      //error
      showError(
        "The password must have at least 6 characters including a number, a special character, a lower case letter and an upper case letter."
      );
      return;
    }
    const society = {
      name: nameSociety,
      type,
      phone: phoneSociety,
      email: emailSociety,
      creationDate,
      lawerForm,
      managementStyle,
      accountBank,
      bank,
      immatriculation,
      structure,
      turnover,
      groupId: localStorage.getItem("groupId"),
      adminId: null, // Insert in BAck
    };
    const users = {
      name,
      firstname,
      phone,
      email,
      password,
      isAdmin: false,
    };

    const allData = {
      society,
      users,
      noAuth: true,
    };
    /* proceed to setup*/
    register(allData);
  };

  return (
    <>
      <Header
        parentClass="pb-7 pt-7 mb-2"
        content={<AddSociety passDataToParent={getAllData} onSubmit={onSubmit}/>}
        title="Society Management"
        onSave={onSave}
        closeModal={closeModal}
        setCloseModal={setCloseModal}
      />
      <Container className="mt--7 content-global bg-gradient-info" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <Table className="align-items-center table-flush" responsive>
                <HeadTable />
                <tbody>
                  {societyLists?.length ? (
                    societyLists?.map((item, index) => {
                      return <Items data={item} />;
                    })
                  ) : (
                    <td colSpan="4" className="text-center text-dark">
                      No items
                    </td>
                  )}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Index;
