import React, { useEffect, useState, Fragment }from 'react';
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/logout";

import firebase from "../firebase/config";


const Nav = (props) => {
  
  const loginSelector = useSelector((state) => state.logIn)
  const signinSelector = useSelector((state) => state.signIn)
  const [userState, setUserState] = useState(null);
  const dispatch = useDispatch();
  const logoutUserAction = () => dispatch(logoutUser());

  useEffect(() => {
    firebase.getUserState().then(user => {
     setUserState(user);
    });
  })

  

  const logout = async() => {
    console.log("logout user");
    setUserState(null);
    await logoutUserAction();
    props.history.replace("/")
  }


  

  let buttons;
    if((loginSelector.user && loginSelector.user.hasOwnProperty("user")) || (signinSelector.user && signinSelector.user.hasOwnProperty("user")) || userState != null){
      buttons = (  
          <Fragment>
              <li><button className="logout" onClick={logout}>LogOut</button></li>
          </Fragment>)
  }else{
      buttons = (    
          <Fragment>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/login">Log In</Link></li>              
          </Fragment>)
  }


    return(
        <nav>
        <ul>
          <li><Link to="/"> Root Music </Link></li>
         
        </ul>
        <ul>
        <li><Link to="/home">Home</Link></li>
        {buttons}
        </ul>
      </nav>
    )

}

export default withRouter(Nav);