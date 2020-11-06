import React from 'react'
import Welcome from './Welcome'
import Signup from './Signup'
import Home from './Home'
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
          <Route path="/">
            <Welcome/>
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
