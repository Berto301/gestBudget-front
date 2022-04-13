import {useEffect,useState} from 'react'
import { Doughnut } from "react-chartjs-2";
// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";
import {useSociety} from '../../../../hooks'
import Header from "../../../../components/Headers/HeaderDashboard";
import CardDashboard from "../../../../components/Cards/CardDashboard";
import { socket } from "../../../../_helpers/socket";

const Index = (props) => {
  const {getStatistic , dataStatics} = useSociety()
  const  [lastActivity , setLastActivity] = useState(new Date()) 
  useEffect(() => {
    async function didMount() {
      await getStatistic(localStorage.getItem("societyId"));
    }
    /**Real time by society */
    socket.on("reload_information_society", async (societyId) => {
      if (localStorage.getItem("societyId") === societyId) {
        await getStatistic(localStorage.getItem("societyId"));
      }
    });

    didMount();

  }, []);

  const {sales,recipes} = dataStatics
  console.log(sales,recipes)


  const dataBySales = {
    labels: ["Real Sales", "Prevision"],
    datasets: [
      {
        data: [ sales?.[0]?.realValue || 0 , sales?.[0]?.sale||0],
        backgroundColor: ["#f5365c", "#ffd600"],
      },
    ],
  };

  const dataByRecipes = {
    labels: ["Real Recipes", "Prevision"],
    datasets: [
      {
        data:  [recipes?.[0]?.realValue || 0 , recipes?.[0]?.recipe||0],
        backgroundColor: ["#fb6340", "#11cdef"],
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
  const getLastActivity = (date)=>{
    setLastActivity(date)
  }

  return (
    <>
      <Header data={dataStatics} passLastActivity={getLastActivity}/>
      <CardDashboard sales={sales} lastActivity={lastActivity}/>
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
