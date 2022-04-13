// reactstrap components
import {useEffect} from 'react'
import { Container, Row, Card, CardBody, Col, Progress } from "reactstrap";
import {useSociety}from '../../hooks/'
import {socket}from '../../_helpers/socket'

const HeaderDashboard = ({data,passLastActivity}) => {
  const {_getById,_society} = useSociety()
  const sales = data?.sales?.[0] || ""
  const recipes = data?.recipes?.[0] ||""
  
   useEffect(() => {
    async function didMount() {
      await _getById(localStorage.getItem("societyId"));
    }
    /**Real time by society */
    socket.on("reload_information_society", async (societyId) => {
      if (localStorage.getItem("societyId") === societyId) {
        await _getById(localStorage.getItem("societyId"));
         passLastActivity(new Date())
      }
    });
   
    didMount();

  }, []);

  const calculSales =()=>{
    if(sales?.realValue || recipes?.realValue){
      const turnover = _society?.turnover|| sales?.turnover || recipes?.turnover
      const salesValue = sales?.realValue || 0 
      const recipesValue = recipes?.realValue || 0

      return turnover - (salesValue - recipesValue)
    }
  }

 const progress =()=>{
   const turnover = _society?.turnover|| sales?.turnover || recipes?.turnover
   const salesValue = sales?.realValue || 0 
   const recipesValue = recipes?.realValue || 0 
   return parseInt(Math.abs(Math.round(((salesValue - recipesValue)/turnover)*100)))
 }

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
                          <b>{progress()}%</b>
                        </h3>
                      </div>
                      <div className="text-center">
                        <h5>Spent this month</h5>
                      </div>
                      <div className="progress">
                        <Progress bar color="danger" value={progress()} />
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
                          <b>{calculSales() || _society?.turnover} Ar</b>
                        </h3>
                      </div>
                      <div className="text-center">
                        <h5>Turnover</h5>
                      </div>
                      <div className="d-flex justify-content-center status">
                        <div className={`mr-2 ${progress() <= 50 ? "success":"danger"}`}></div>
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
