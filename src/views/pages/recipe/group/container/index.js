
// reactstrap components
import {
  Card,
  Table,
  Container,
  Row,
} from "reactstrap";
import Header from "../../../../../components/Headers/HeaderBase";
import HeadTable from "../subComponents/HeadTable.js";
import Items from "./items.js";

const Tables = () => {
  return (
    <>
      <Header
        parentClass="pb-7 pt-7"
      />
      <Container className="mt--7 content-global " fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              
              <Table className="align-items-center table-flush" responsive>
                <HeadTable/>
                <tbody>
                  <Items />
                </tbody>
              </Table>
              
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Tables;
