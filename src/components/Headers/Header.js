

import {useEffect} from 'react'
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = ({data}) => {
  
  const calculTrafics = ()=>{
    let trafics = {}
    if(data?.recipe || data?.sales){
      const {sales,recipes} = data
      let totalRecipes = 0 ,totalSales = 0
      for(let recipe of recipes){
        totalRecipes += recipe?.realValue 
      }

 
       for(let sale of sales){
        totalSales += sale?.realValue 
      }
      trafics.sales = totalSales
      trafics.recipes = totalRecipes
      trafics.total = totalSales + totalRecipes
    }
    return trafics
  }

  const calculPercent = () =>{
    let value = 0;
    if(calculTrafics()?.sales || calculTrafics()?.recipes){
      const {sales, recipes} = calculTrafics()
      value = ((sales/recipes) * 100).toFixed(2) 
    }
    return value
  }

 useEffect(()=>{
   if(data?.sales || data?.recipes){
     // for(let sale of sales){
     //   for(let recipe of recipes){
     //     if()
     //   }
     // }
     const max  = Math.max.apply(Math, data?.recipes?.map((item)=> item.value))
     
   }

 },[data?.sales,data?.recipes])

  const checkTheBestSociety = ()=>{

  }

 console.log(data)

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Traffic
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {calculTrafics()?.total || 0} Ar
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className={`text-${(calculTrafics()?.sales > calculTrafics()?.recipes )? "danger":"success"} mr-2`}>
                        <i className={`fa fa-arrow-${(calculTrafics()?.sales > calculTrafics()?.recipes )? "down":"up"}`} /> {calculPercent()}%
                      </span>{" "}
                      {/*<div className="d-flex flex-column"> 
                        <span className="text-nowrap">Sales:{calculTrafics()?.sales || 0} Ar</span> 
                        <span className="text-nowrap">Recipes:{calculTrafics()?.recipes || 0} Ar </span>
                      </div>*/}
                      
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                      <div>
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Sales 
                        </CardTitle>
                        <span className="h3 font-weight-bold mb-0">{calculTrafics()?.sales || 0} Ar</span>
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Recipes
                        </CardTitle>
                        <span className="h3 font-weight-bold mb-0">{calculTrafics()?.recipes || 0} Ar</span>
                      </div>
                        
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-chart-pie" />
                        </div>
                      </Col>
                    </Row>
                    
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Society
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{data?.turnover?.length || 0}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                    {<p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-warning mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span>{" "}
                      <span className="text-nowrap">Best society: ()</span>
                    </p>}
                  </CardBody>
                </Card>
              </Col>
              
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
