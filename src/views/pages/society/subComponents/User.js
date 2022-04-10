import React ,{useEffect} from "react";
import { Row, Col } from "reactstrap";
import { Input, InputGroup } from "../../../../components/componentsSystems";
import {useUser} from '../../../../hooks'
const User = ({ passDataToParent , id}) => {
  const {_getById,usersConnected:user} =useUser()
  useEffect(()=>{
    if(id){
      _getById(id)
    }
  },[id])

 const {
   name,
   firstname,
   email,
   phone
 } = user
  
  return (
    <div className="pl-lg-4" >
      <Row>
        <Col lg="6">
          <Input
            name="name"
            type="text"
            label="First name"
            passData={passDataToParent}
            value={name}
          />
        </Col>
        <Col lg="6">
          <Input
            name="firstname"
            type="text"
            label="Last name"
            passData={passDataToParent}
            value={firstname}
          />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <Input name="phone" type="text" label="Phone" passData={passDataToParent} value={phone}/>
        </Col>
        <Col lg="6">
          <Input
            name="email"
            type="email"
            label="Email address"
            passData={passDataToParent}
            value={email}
          />
        </Col>
      </Row>
    </div>
  );
};

export default User;
