// reactstrap components
import { useState } from "react";
import { Container } from "reactstrap";
import Header from "../../../../components/Headers/HeaderBase";
import Items from "./items";
import Content from "./Content";
import { useNotification, useSales } from "../../../../hooks/";
// import GraphSales from './Graph'

const Index = () => {
  const { setCloseModal, closeModal, _update } = useSales();
  const [dataSales, setDataSales] = useState({
    _id: "",
    name: "",
    date: "",
    realValue: "",
  });

  const getSalesData = (updatedAttrs) => {
    setDataSales((temp) => ({
      ...temp,
      ...updatedAttrs,
    }));
  };
  const onSave = ()=>{

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
            <Items />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Index;
