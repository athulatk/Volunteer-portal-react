import React from 'react'
import Welcome from './Welcome'
import Signup from './Signup'
import Home from './Home'
import Profile from './Profile'
import Profileupdate from './Profileupdate'
import Disaster from './Disaster'
import Food from './Food'
import Blood from './Blood'
import HomeOrg from './Home_org'
import './App.css';
import {LoginProvider} from './LoginContext'
import 'bootstrap/dist/css/bootstrap.min.css';
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
          <Route exact path="/">
            <Welcome/>
          </Route>
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
          <Route path="/blood">
            <Blood />
          </Route>
          <Route path="/food">
            <Food />
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/update">
            <Profileupdate/>
          </Route>
        </Switch>
        </Router>
    </div>
    </LoginProvider>
  );
}

export default App;
