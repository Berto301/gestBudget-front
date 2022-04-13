/*eslint react-hooks/exhaustive-deps:off*/
// reactstrap components
import { useState, useEffect } from "react";
import { Container } from "reactstrap";
import Header from "../../../../components/Headers/HeaderBase";
import Items from "./items";
import Content from "./Content";
import { useNotification, useSalesBySociety } from "../../../../hooks/";
import { socket } from "../../../../_helpers/socket";
// import GraphSales from './Graph'

const Index = () => {
  const { setCloseModal, closeModal, _create , _getBySocietyId,sales} = useSalesBySociety();
  const {showError} = useNotification()
  const [dataSales, setDataSales] = useState({
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

  const getSalesData = (updatedAttrs) => {
    setDataSales((temp) => ({
      ...temp,
      ...updatedAttrs,
    }));
  };
  const onSave = ()=>{
    if(!dataSales?._idSelected || !dataSales?.realValue || !dataSales?.date){
      return showError("Please complete all required fields")
    }
    const {date,realValue,description,_idSelected} = dataSales
    const dataToSave = {
      realValue,
      salesId:_idSelected,
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
              passDataToParent={getSalesData}
             
            />
          }
        />
        <Container className="content-global" fluid>
          {/*<GraphSales />*/}
          <div className="content_sales">
            {sales?.length ? sales?.map((item,index)=>{
              return <Items sales={item}/>
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
