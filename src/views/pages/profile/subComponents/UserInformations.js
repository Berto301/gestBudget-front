import {useState,useEffect} from 'react'
import {
  Button,
  Card,
  CardBody,
  Row,
  Col,
  CardFooter,
} from "reactstrap";
import { Input } from "../../../../components/componentsSystems";
import {useUser,useNotification} from '../../../../hooks'
// core components

const UserInformation = ({users }) => {
  const {_update} = useUser()
  const {showError} = useNotification()
  const [onSubmit,setOnSubmit] = useState(false)
  const [usersData,setUsersData] = useState({
    name:"",
    firstname:"",
    email:"",
    phone:""
  })
  const {
    name,
    firstname,
    email,
    phone
  } = usersData
  const getData = (updatedAttrs) => {
    setUsersData((temp) => ({
      ...temp,
      ...updatedAttrs,
    }));
  };
  useEffect(()=>{
    if(users){
      setUsersData(users)
    }
  },[users])
  const OnUpdate = ()=>{
    setOnSubmit(true)
    if(!name || !firstname || !email) return showError("Please complete all required fields")
    _update(usersData)
  }
  
  return (
    <Card className="bg-secondary shadow">
      <CardBody>
        <h6 className="heading-small text-muted mb-4">User information</h6>
        <div className="pl-lg-4">
          <Row>
            <Col lg="6">
              <Input
                name="firstname"
                type="text"
                label="First name"
                passData={getData}
                value={firstname}
                onSubmit={onSubmit}
                required={true}
              />
            </Col>
            <Col lg="6">
              <Input
                name="name"
                type="text"
                label="Last name"
                passData={getData}
                value={name}
                onSubmit={onSubmit}
                required={true}
              />
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Input
                name="email"
                type="text"
                label="Email"
                passData={getData}
                value={email}
                onSubmit={onSubmit}
                required={true}
              />
            </Col>
            <Col lg="6">
              <Input
                name="phone"
                type="text"
                label="Phone"
                passData={getData}
                value={phone}
              />
            </Col>
          </Row>
        </div>
        <hr className="my-4" />
      </CardBody>
      <CardFooter className="bg-white border-0">
        <Row className="align-items-center">
          <Button
            color="primary"
            onClick={OnUpdate}
            size="sm"
          >
            Update
          </Button>
        </Row>
      </CardFooter>
    </Card>
  );
};

export default UserInformation;
