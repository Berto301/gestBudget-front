import {useEffect} from 'react'
import { Pie, Doughnut } from "react-chartjs-2";
// reactstrap components
import { Card, CardHeader, CardBody, Container, Row, Col } from "reactstrap";
import {useGroup} from '../../../../hooks'
import Header from "components/Headers/Header.js";
import { socket } from "../../../../_helpers/socket";

const Index = (props) => {

  const {getStatistic , dataStatics} = useGroup()
  const types =dataStatics?.types || []
  const turnovers = dataStatics?.turnover || []

  useEffect(() => {
    async function didMount() {
      await getStatistic(localStorage.getItem("groupId"));
    }
    /**Real time by society */
    socket.on("reload_information", async (groupId) => {
      if (localStorage.getItem("groupId") === groupId) {
        await getStatistic(localStorage.getItem("groupId"));
      }
    });

    didMount();

  }, []);

  
  const graphTypes = {
    labels:types?.map((item)=>item?.name),
    datasets: [
      {
        data: types?.map((item)=>item?.count),
        backgroundColor: types?.map((item)=>item?.backgroundColor),
      },
    ],
  };

  const graphTurnover = {
     labels:turnovers?.map((item)=>item?.name),
    datasets: [
      {
        data: turnovers?.map((item)=>item?.turnover),
        backgroundColor: turnovers?.map((item)=>item?.backgroundColor),
      },
    ],
  };

  

  const options = {
    defaults: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <Header data={dataStatics || {}}/>
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col xl="6">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Society by type
                    </h6>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Pie
                    data={graphTypes}
                    options={options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl="6">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Turnover by society
                    </h6>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Doughnut
                    data={graphTurnover}
                    options={options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
