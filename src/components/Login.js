import React , {useState, Fragment} from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/login";
import {Redirect} from "react-router-dom";
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
    const [redirect,setRedirect] = useState(false);
   
    const dispatch = useDispatch();
    const logInUserAction = (email, password) => dispatch(loginUser(email, password));


    const login = async(e) => {
        e.preventDefault()
        
        if(email !== '' && password !== ''){
            console.log("login user in");
            let user = await logInUserAction(email, password);
            if (user){
              setRedirect(true);
            }
            
        }else{
            console.log("need to fill the credentials")
        }
        
    } 

    const redirectTo = redirect;
    if(redirectTo){
        return <Redirect to="/home" />  
    }


    return(
      
        <Fragment>
            <form onSubmit={login} className={classes.root} noValidate autoComplete="off">
            <br/>
            <p>Welcome back.</p>
            <br/>
            <TextField id="standard-basic" label="Email" onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <TextField 
            id="standard-basic" 
            label="Password" 
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <input type="submit" value="Login" />
            </form>
          
        </Fragment>
       
    )

}

export default Signin;