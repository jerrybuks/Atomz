import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import  Landing from "./landing/Landing";
import Register from "./register/Register"
import Dashboard from './Dashboard/Dashboard'
import Emergency from './emergencyList/Emergency'
import Login from "./login/Login"
import Alerts from './common/Alerts';
import PrivateRoute from './routing/PrivateRoute';

import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import './App.css';

function App() {
  return (
    <div className="App">
      <AuthState>
        <AlertState>
          <Router >
            <Alerts />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route exact path="/emergency_list" component={Emergency} />
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </Router >
          </AlertState>
        </AuthState>
    </div>
  );
}

export default App;
