import React from 'react'
import Welcome from './Welcome'
import Signup from './Signup'
import Home from './Home'
import Profile from './Profile'
import Profileupdate from './Profileupdate'
import Disaster from './Disaster'
import Disasterorg from './organization/Disasterorg'
import Blood from './Blood'
import HomeOrg from './organization/Home_org'
import './App.css';
import {LoginProvider} from './LoginContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import VolunteerView from './organization/VolunteerView'
import BloodOrg from './organization/BloodOrg'
function App() {

  return (
    <LoginProvider>
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/home" component={Home}/>
          <Route path="/homeorg" component={HomeOrg}/>
          <Route path="/disaster" component={Disaster}/>
          <Route exact path="/disasterorg" component={Disasterorg}/>
          <Route path="/disasterorg/:eventid" component={VolunteerView}/>
          <Route path="/blood" component={Blood}/>
          <Route path="/bloodorg" component={BloodOrg}/>
          <Route exact path="/profile" component={Profile}/>
          <Route path="/profile/update" component={Profileupdate}/>
       </Switch>
        </Router>
    </div>
    </LoginProvider>
  );
}

export default App;
