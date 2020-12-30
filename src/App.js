import React from 'react'
import Welcome from './Welcome'
import Signup from './Signup'
import Home from './Home'
import Profile from './Profile'
import Disaster from './Disaster'
import Food from './Food'
import HomeOrg from './Home_org'
import './App.css';
import {LoginProvider} from './LoginContext'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {

  return (
    <LoginProvider>
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
          <Route path="/profile">
            <Profile/>
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
    </LoginProvider>
  );
}

export default App;
