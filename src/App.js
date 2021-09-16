import Home from './Components/Home'
import {Route, Switch} from 'react-router-dom'
import Signup from './Components/Signup'
import Navigation from './Components/Navigation'

function App() {
  return (
    <div>
      
    <Navigation/>
    <Switch>
      <Route exact path='/'>
    <Home/>
    </Route>
    <Route path='/signup'>
      <Signup/>
    </Route>
    </Switch>
    </div>
  );
}

export default App;
