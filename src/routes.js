import React from "react";
import { Switch, Route } from "react-router-dom";

//import the components
import Main from './components/Main/Main';
import Signin from './components/Signin';
import Login from './components/Login';
import Auth from './components/auth';
import Home from './components/Home';

const Routes = () => (
   
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Auth(Home)} />
        </Switch>
       
) 

export default Routes;