import React from "react";
import Home from "./Components/Home";
import { Route, Switch } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Plants from "./Components/Plants";
import Navigation from "./Components/Navigation";
import PlantList from "./Components/PlantList";

function App() {
  //I will use useEffect(axiosWithAuth).
  // const { state, setState } = useState(initialPlants);

  // const addPlant =(plant)=>{
  //   setState([...state,plant])
  // }

  // const history = useHistory();
  // const logout = () => {
  //after done the backend I will comment it out!
  // localStorage.removeItem("token");
  //history.push("/")
  // console.log("hello");
  // };

  return (
    <div>
      {/* I will put logout props inside Navigation  logout={logout}*/}
      <Navigation />
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
        <Route path="/PlantList">
          <PlantList />
        </Route>
        <Route path="/editYourInfo"></Route>
      </Switch>
    </div>
  );
}

export default App;
