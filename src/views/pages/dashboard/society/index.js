import { Doughnut } from "react-chartjs-2";
// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";

import Header from "../../../../components/Headers/HeaderDashboard";
import CardDashboard from "../../../../components/Cards/CardDashboard";

const Index = (props) => {
  const dataBySales = {
    labels: ["Real Sales", "Prevision"],
    datasets: [
      {
        data: [400, 600],
        backgroundColor: ["#5e72e4", "#f2f2f2"],
      },
    ],
  };

  const dataByRecipes = {
    labels: ["Real Recipes", "Prevision"],
    datasets: [
      {
        data: [200, 100],
        backgroundColor: ["#fe72e4", "#e2e2e2"],
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
      <Header />
      <CardDashboard />
      {/* Page content */}
      <Container className="content-global bg-gradient-info pt-2" fluid>
        <Row>
          <Col xl="12">
            <Card className="shadow">
              <CardBody>
                <Row>
                  <Col xl="6">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1 text-center">
                        Sales par rapport au prevision
                      </h6>
                      <div className="chart">
                        <Doughnut
                          data={dataBySales}
                          options={options}
                          getDatasetAtEvent={(e) => console.log(e)}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xl="6">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1 text-center">
                        Recipes par rapport au prevision
                      </h6>
                      <div className="chart">
                        <Doughnut
                          data={dataByRecipes}
                          options={options}
                          getDatasetAtEvent={(e) => console.log(e)}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
