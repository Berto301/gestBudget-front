
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "../layouts/Admin.js";
import AuthLayout from "../layouts/Auth.js";

const Routes = ()=>{
  const isLoggedIn = (Component) => (props) => {
    return localStorage.getItem("userId") ? (
      <Component {...props} />
    ) : (
      <Redirect to="/auth/login" />
    );
  };
  return(
     <BrowserRouter>
      <Switch>
        <Route path="/admin" render={isLoggedIn(AdminLayout)} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Redirect from="/" to="/auth/login" />
      </Switch>
    </BrowserRouter>
    )
}
export default Routes
