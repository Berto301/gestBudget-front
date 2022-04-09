/*eslint react-hooks/exhaustive-deps:off*/
import React , {useEffect} from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import StandardNotification from "components/Warnings/standardNotification";
import {authRoutes} from "../routes/main.js";

import { useDispatch,useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Auth = (props) => {
  const reduxDispatch = useDispatch();
  let standardNotification = useSelector((state) => state.standardNotification);
  const mainContent = React.useRef(null);
  const location = useLocation();
  useEffect(()=>{
    // Needde on unmount 
    return () => reduxDispatch({
      type:"STANDARD_NOTIFICATION",
      payload:null
    })
  },[])
  

  /*function to active notification*/
  const toastStandardNotification = (message, type) => {
    toast.info(<StandardNotification type={type} message={message} />, {
      hideProgressBar: true,
      autoClose: 10000,
      draggable: false,
    });
  };
  useEffect(() => {
    if (standardNotification) {
      toastStandardNotification(
        standardNotification?.message,
        standardNotification?.type
      );
    }
  }, [standardNotification]);

  useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (authRoutes) => {
    return authRoutes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <AuthNavbar />
      <ToastContainer pauseOnHover />
        <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Welcome to B-Gest!</h1>
                  <p className="text-lead text-light">
                    It's a website to group society and manage their own budget (recipe / expense).
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Switch>
              {getRoutes(authRoutes)}
              <Redirect from="*" to="/auth/login" />
            </Switch>
          </Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
};

export default Auth;
