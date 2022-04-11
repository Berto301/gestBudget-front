/*eslint react-hooks/exhaustive-deps:off*/
import { useState, useEffect } from "react";
// reactstrap components
import { Card, Table, Container, Row } from "reactstrap";
import Header from "../../../../../components/Headers/HeaderBase.js";
import HeadTable from "../subComponents/HeadTable.js";
import Items from "./items.js";
import { useNotification, useRecipe } from "../../../../../hooks/";
import AddRecipe from "./AddRecipe";
import { STRONG_PASSWORD_REGEX } from "../../../../../_helpers/_constants";
import { socket } from "../../../../../_helpers/socket";

const Index = () => {
  const { showError } = useNotification();
  const { _create, setCloseModal, closeModal ,_getByGroupId, recipes} = useRecipe();

  const [dataRecipe, setDataRecipe] = useState({
    name: "",
    description: "",
    icon: "",
    color: "",
    estimation:""
  });

  useEffect(() => {
    async function didMount() {
      await _getByGroupId(localStorage.getItem("groupId"));
    }
    /**Real time by group */
    socket.on("reload_information", async (groupId) => {
      if (localStorage.getItem("groupId") === groupId) {
        await _getByGroupId(localStorage.getItem("groupId"));
      }
    });
    didMount();
  }, []);

  const getRecipeData = (updatedAttrs) => {
    setDataRecipe((temp) => ({
      ...temp,
      ...updatedAttrs,
    }));
  };

  const onSave = ()=>{
    const {
      name,
      icon,
      color,
      estimation,
      description
    } = dataRecipe

     const REQUIRED_FIELD = [
      name,
      estimation
    ];

    let isFormValid = REQUIRED_FIELD.every((item) => Boolean(item));

    if (!isFormValid) {
      // error message
      showError("Please complete the required fields");
      return;
    }

    const dataTosave ={
      name,
      icon,
      color,
      estimation,
      description,
      groupId:localStorage.getItem("groupId")
    }
    _create(dataTosave)
  }
  

  return (
    <>
      <Header
        parentClass="pb-7 pt-7 mb-2"
        content={<AddRecipe passDataToParent={getRecipeData} />}
        title="Recipe Management"
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
                    {recipes?.length ? (
                      recipes?.map((item, index) => {
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
