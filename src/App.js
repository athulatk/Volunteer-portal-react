import React from 'react'
import Welcome from './Welcome'
import Signup from './Signup'
import Home from './Home'
import Disaster from './Disaster'
import Food from './Food'
import HomeOrg from './Home_org'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/homeorg">
            <HomeOrg />
          </Route>
          <Route path="/disaster">
            <Disaster />
          </Route>
          <Route path="/food">
            <Food />
          </Route>
          <Route path="/">
            <Welcome/>
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
