
import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar, Pie, Doughnut} from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";


import Header from "components/Headers/Header.js";

const Index = (props) => {
  
  const data ={
      labels: ["ESN", "Cyber"],
      datasets: [
        {
          data: [4, 6],
          backgroundColor:["#5e72e4","#f2f2f2"]
        },
      ],
    };  

 const dataBySales ={
    labels: ["Society 1", "Society 2"],
    datasets: [
      {
        data: [400, 600],
        backgroundColor:["#5e72e4","#f2f2f2"]
      },
    ],
  };  

  const dataByRecipes ={
    labels: ["Society 1", "Society 2"],
    datasets: [
      {
        data: [200, 100],
        backgroundColor:["#fe72e4","#e2e2e2"]
      },
    ],
  };  

  const options={
    defaults:{
      legend: {
          display: false,
          
        },
    }
  }
  
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
         <Col xl="4">
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
                    data={data}
                    options={options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Sales by society
                    </h6>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Doughnut
                    data={dataBySales}
                    options={options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
         
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Recipe by society
                    </h6>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Doughnut
                    data={dataByRecipes}
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
