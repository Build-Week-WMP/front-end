import React, { useState } from "react";
import Home from "./Components/Home";
import { Route, Switch, useHistory } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Plants from "./Components/Plants";
import Navigation from "./Components/Navigation";

function App() {
  //I will use useEffect(axiosWithAuth).

  //This is dummy data ⬇️
  const initialPlants = [
    {
      id: 0,
      username: "test",
      phonenumber: 8089999999,
      password: "test",
    },
    {
      id: 1,
      username: "testtwo",
      phonenumber: 8080000000,
      password: "testtwo",
    },
  ];

  const { state, setState } = useState(initialPlants);

  // const addPlant =(plant)=>{
  //   setState([...state,plant])
  // }

  // const history = useHistory();
  const logout = () => {
    //after done the backend I will comment it out!
    // localStorage.removeItem("token");
    //history.push("/")
    console.log("hello");
  };

  return (
    <div>
      <Navigation logout={logout} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        {/* ⬇️ I will put PrivateRoute */}
        <Route path="/plants">
          <Plants />
        </Route>
        <Route path="/PlantList"></Route>
        <Route path="/editYourInfo"></Route>
      </Switch>
    </div>
  );
}

export default App;
