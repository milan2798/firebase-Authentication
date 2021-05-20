import './App.css';
import Login from './component/login';
import Signup from './component/signup';
import Home from './component/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { auth, db } from './component/firesetup'
import { useEffect, useState } from 'react'


function App() {
  return (


    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
