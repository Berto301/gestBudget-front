
import {
    Card,
    CardBody,
    Row,
    Col,
  } from "reactstrap";
  
  const Profile = ({name,isAdmin , originalName}) => {
    return (
        <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
        <Card className="card-profile shadow content-profile">
          <Row className="justify-content-center">
            <Col className="order-lg-2" lg="3">
              <div className="card-profile-image">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="pdp"
                    className="rounded-circle"
                    src={ originalName ? process.env.REACT_APP_SERVER+"/public/"+originalName :  require("../../../../assets/img/others/profile.jpg").default}
                  />
                </a>
              </div>
            </Col>
          </Row>
          
          <CardBody className="pt-0 pt-md-4 d-flex justify-content-center">
            
            <div className="text-start content-info">
              <h3>
                <i className="far fa-address-card mr-2"/>
                <span className="text-dark">{name}</span>
              </h3>
              <div className="h5 mt-4">
                <i className="fas fa-briefcase mr-2" />
                <span className="text-dark">Admin board for {isAdmin? "Group" : "Society"}</span>
              </div>
              
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  };
  
  export default Profile;