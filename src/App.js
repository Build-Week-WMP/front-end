import React, { useState } from "react";
import Home from "./Components/Home";
import { Route, Switch, useHistory } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Plants from "./Components/Plants";
import PlantForm from "./Components/PlantForm";
import Navigation from "./Components/Navigation";
import PlantList from "./Components/PlantList";
import EditUser from "./Components/editYourInfo/EditUser";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    history.push("/");
    console.log("hello");
  };

  const [ID, setID] = useState(null);
  // const [singUp, setSignUp] = useState(null);

  return (
    <div>
      {/* I will put logout props inside Navigation  logout={logout}*/}
      <Navigation logout={logout} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login ID={ID} setID={setID} />
        </Route>
        {/* ⬇️ I will put PrivateRoute */}
        <PrivateRoute path="/PlantList" component={PlantList} />
        <PrivateRoute path="/plants" component={Plants} />

        <PrivateRoute path="/addPlant" component={PlantForm} />

        <PrivateRoute
          path="/edituser"
          render={(routeProps) => <EditUser ID={ID} {...routeProps} />}
        />
      </Switch>
      {ID}
    </div>
  );
}

export default App;
