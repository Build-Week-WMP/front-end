import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props) => {
  if (localStorage.getItem("token")) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default PrivateRoute;
