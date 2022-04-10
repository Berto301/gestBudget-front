
/*eslint-disable*/
import {memo} from 'react'
// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

const AdminFooter = () => {
  return (
    <>
      <footer className="py-5">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xl="12">
              <div className="copyright text-center text-xl-left text-muted">
                © {new Date().getFullYear()}{" "}
                <a
                  className="font-weight-bold ml-1"
                  href="https://www.creative-tim.com?ref=adr-auth-footer"
                  target="_blank"
                >
                  Berto Leka
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default memo(AdminFooter);
