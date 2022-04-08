// reactstrap components
import { Container, Row, Card, CardBody, Col, Progress } from "reactstrap";

const HeaderDashboard = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-2 pt-2 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Card>
              <CardBody>
                <Row className="content-header-dashboard">
                  <Col xl="3">
                    <div className="d-flex flex-column">
                      <div className="text-center">
                        <h3>
                          <b>71%</b>
                        </h3>
                      </div>
                      <div className="text-center">
                        <h5>Spent this month</h5>
                      </div>
                      <div className="progress">
                        <Progress bar color="success" value="30" />
                      </div>
                    </div>
                  </Col>
                  <Col xl="6">
                      <div className="d-flex justify-content-center">
                        <h2><b>Budgets</b></h2>
                      </div>
                  </Col>
                  <Col xl="3">
                    <div className="d-flex flex-column">
                      <div className="text-center">
                        <h3>
                          <b>1200000 Ar</b>
                        </h3>
                      </div>
                      <div className="text-center">
                        <h5>Forecast end of month balance</h5>
                      </div>
                      <div className="d-flex justify-content-center status">
                        <div className="grey mr-2"></div>
                        <div className="success mr-2"></div>
                        <div className="danger"></div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HeaderDashboard;
