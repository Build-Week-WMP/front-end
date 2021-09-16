import Home from "./Components/Home";
import { Route, Switch } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Plants from "./Components/Plants";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div>
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
        <Route path="/plants">
          <Plants />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
