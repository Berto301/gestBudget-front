// reactstrap components
import {
  Container,
} from "reactstrap";
import Header from "../../../../components/Headers/HeaderBase";
// import Items from "./items";
// import GraphSales from './Graph'

const Index = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Header
          parentClass="pb-2 pt-2"
        />
        <Container className="content-global" fluid>
         
          {/*<GraphSales />*/}
          <div className="content_sales">
            {/*<Items/>*/}
          </div>
          
        </Container>
      </div>
    </>
  );
};

export default Index;
