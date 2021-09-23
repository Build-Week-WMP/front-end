import React, { useState } from "react";
import Home from "./Components/Home";
import { Route, Switch, useHistory } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Plants from "./Components/Plants";
import Navigation from "./Components/Navigation";
import EditUser from "./Components/editYourInfo/EditUser";

function App() {
  //I will use useEffect(axiosWithAuth).
  // const { state, setState, } = useState(initialPlants);

  // const addPlant =(plant)=>{
  //   setState([...state,plant])
  // }

  const history = useHistory();
  const logout = () => {
    // after done the backend I will comment it out!
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    history.push("/");
    console.log("hello");
  };

  const [ID, setID] = useState(null);

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
        <Route path="/plants">
          <Plants />
        </Route>
        <Route path="/PlantList"></Route>
        <Route path="/edituser">
          <EditUser ID={ID} />
        </Route>
      </Switch>
      {ID}
    </div>
  );
}

export default App;
