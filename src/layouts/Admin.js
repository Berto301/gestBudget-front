/*eslint react-hooks/exhaustive-deps:off*/
import React , {useEffect,useState} from "react";
import { useLocation, Route, Switch } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import StandardNotification from "components/Warnings/standardNotification";
import {societyRoutes,routes} from "../routes/main.js";
import { useDispatch,useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import {useUser,useGroup} from '../hooks'
import "react-toastify/dist/ReactToastify.css";

const Admin = (props) => {
  const reduxDispatch = useDispatch();
  let standardNotification = useSelector((state) => state.standardNotification);
  const mainContent = React.useRef(null);
  const location = useLocation();
  let actualRoutes = routes || []
  const {_getById,usersConnected} = useUser()
  const {_getById:_getGroupById,groups} = useGroup()

  useEffect(()=>{
    if(!usersConnected?.isAdmin) actualRoutes = societyRoutes
  },[usersConnected?.isAdmin])
  

  useEffect(()=>{
    async function didMount() {
      const groupId = localStorage.getItem("groupId") || null
      await _getById(localStorage.getItem("userId"))
      if(groupId)
      await _getGroupById(groupId)
    }
    didMount()
    // Needeed on unmount 
    return clearReduxDispatch()
  },[])
  
  const clearReduxDispatch = () => {
    reduxDispatch({
     type:"STANDARD_NOTIFICATION",
     payload:null
   })
 }

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
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (actualRoutes) => {
    return actualRoutes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
            render={(routeProps) => (
              <prop.component
                {...routeProps}
              />
            )}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < actualRoutes.length; i++) {
      if (
        props.location.pathname.indexOf(actualRoutes[i].layout + actualRoutes[i].path) !==
        -1
      ) {
        return actualRoutes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={actualRoutes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/argon-react.png").default,
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
      <ToastContainer pauseOnHover />
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
          usersConnected={usersConnected}
        />
        <Switch>
          {getRoutes(actualRoutes)}
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Admin;
