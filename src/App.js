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
  const [dis, dispatch] = useState({});


  useEffect(() => {
    //will only run once the app component loads...
    auth.onAuthStateChanged((authUser) => {
      // console.log("The user is >>>>", authUser);

      if (authUser) {
        //the user just logged in the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // return () => {
    //   cleanup
    // }
  }, []);
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
