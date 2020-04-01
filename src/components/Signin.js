import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../actions/signin';
import {Redirect} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



const Signin = () => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [routeRedirect, setRedirect] = useState('');   
    const dispatch = useDispatch();
    const createUserAction = (email, password) => dispatch(createUser(email, password));


    const signin = async(e) => {
        e.preventDefault()
        if(email !== "" && password !== ''){
            console.log("creating user");
            await createUserAction(email, password);
            setRedirect(true);
        }else{
            console.log("need to fill the credentials")
        }

    } 

    const redirectTo = routeRedirect;
    if(redirectTo){
        return <Redirect to="/home" />  
    }


    return(
      
        <Fragment>
            <form onSubmit={signin} className={classes.root} noValidate autoComplete="off">
            <br/>
            <p>Create an account.</p>
            <br/>
            <TextField id="standard-basic" label="Email" onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <TextField 
            id="standard-basic" 
            label="Password" 
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)} />
            <br/>
            <input type="submit" value="Create account" />
            </form>
        </Fragment>
       
    )

}

export default Signin;