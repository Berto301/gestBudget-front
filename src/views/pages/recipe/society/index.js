/*eslint react-hooks/exhaustive-deps:off*/
import { useState, useEffect } from "react";
import { Container } from "reactstrap";
import Header from "../../../../components/Headers/HeaderBase";
import Items from "./items";
import Content from "./Content";
import { useNotification, useRecipeBySociety } from "../../../../hooks/";
import { socket } from "../../../../_helpers/socket";
// import GraphSales from './Graph'

const Index = () => {
  const { setCloseModal, closeModal, _create , _getBySocietyId, recipes} = useRecipeBySociety();
  const {showError} = useNotification()
  const [dataRecipes, setDataRecipes] = useState({
    date: "",
    realValue: "",
    description:"",
    _idSelected:null,
  });

   useEffect(() => {
    async function didMount() {
      await _getBySocietyId(localStorage.getItem("societyId"));
    }
    /**Real time by society */
    socket.on("reload_information_society", async (societyId) => {
      if (localStorage.getItem("societyId") === societyId) {
        await _getBySocietyId(localStorage.getItem("societyId"));
      }
    });

    didMount();

  }, []);


  const getRecipesData = (updatedAttrs) => {
    setDataRecipes((temp) => ({
      ...temp,
      ...updatedAttrs,
    }));
  };

  const onSave = ()=>{
    if(!dataRecipes?._idSelected || !dataRecipes?.realValue || !dataRecipes?.date){
      return showError("Please complete all required fields")
    }
    const {date,realValue,description,_idSelected} = dataRecipes
    const dataToSave = {
      realValue,
      recipeId:_idSelected,
      date,
      description,
      groupId:localStorage.getItem("groupId"),
      societyId:localStorage.getItem("societyId")
    }
    _create(dataToSave)
  }
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Header
          parentClass="pb-2 pt-2"
          onSave={onSave}
          closeModal={closeModal}
          setCloseModal={setCloseModal}
          content={
            <Content
              passDataToParent={getRecipesData}
            />
          }
        />
        <Container className="content-global" fluid>
          {/*<GraphSales />*/}
          <div className="content_sales">
            {recipes?.length ? recipes?.map((item,index)=>{
              return <Items recipes={item}/>
            })
             :<div className="text-center">No items</div>
            }
          </div>
        </Container>
      </div>
    </>
  );
};

export default Index;
