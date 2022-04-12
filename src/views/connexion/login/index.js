
import {  useState } from "react"; 
import {
  Button,
  Card,
  CardBody,
  Row,
  Col,
  NavLink,
} from "reactstrap";
import { InputGroup } from "../../../components/componentsSystems";
import { Link } from "react-router-dom";
import { useUser } from "../../../hooks";
import { withNotification } from "../../../hooks/notification.state";

const Login = ({ showError }) => {
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const {login} = useUser()
  const getPasswordData = (params) => {
    setPassword(params);
  };
  const getEmailData = (params) => {
    setEmail(params);
  };

  const onLogin = ()=>{
    if(!password || !email) return showError("Please complete the required fields");
    login(email,password)
  }
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign in with credentials</small>
            </div>

            <InputGroup
              name="email"
              type="text"
              label="Email"
              passData={getEmailData}
              icon="ni ni-email-83"
              autoComplete="new-text"
            />
            <InputGroup
              name="password"
              type="password"
              label="Password"
              passData={getPasswordData}
              icon="ni ni-lock-circle-open"
              autoComplete="new-password"
            />

            <div className="text-center">
              <Button className="my-4" color="primary" type="button" onClick={onLogin}>
                Sign in
              </Button>
            </div>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6"></Col>
          <Col className="text-right" xs="6">
            <NavLink className="text-light" to="/auth/register" tag={Link}>
              <small>Create new account</small>
            </NavLink>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default withNotification(Login);
