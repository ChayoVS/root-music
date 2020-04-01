import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/logout';
import firebase from '../../firebase/config';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './style.css'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

const Nav = props => {
	const loginSelector = useSelector(state => state.logIn);
	const signinSelector = useSelector(state => state.signIn);
	const [userState, setUserState] = useState(null);
	const dispatch = useDispatch();
	const logoutUserAction = () => dispatch(logoutUser());

	useEffect(() => {
		firebase.getUserState().then(user => {
			setUserState(user);
		});
	});

	const logout = async () => {
		console.log('logout user');
		setUserState(null);
		await logoutUserAction();
		props.history.replace('/');
	};

	let buttons;
	if (
		(loginSelector.user && loginSelector.user.hasOwnProperty('user')) ||
		(signinSelector.user && signinSelector.user.hasOwnProperty('user')) ||
		userState != null
	) {
		buttons = (
			<Fragment>
				<Button color="inherit" onClick={logout}>
					<li>Log Out</li>
				</Button>
			</Fragment>
		);
	} else {
		buttons = (
			<Fragment>
				<Button color="inherit">
					<Link to="/login">Log In</Link>
				</Button>
        <Button color="inherit">
					<Link to="/signin">Sign In</Link>
				</Button>
			</Fragment>
		);
	}

	const classes = useStyles();

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
				<Link to="/">Root Music</Link>
				</Typography>
				<Button color="inherit">
					<Link to="/home">Home</Link>
				</Button>
				{buttons}
			</Toolbar>
		</AppBar>
	);
};

export default withRouter(Nav);
