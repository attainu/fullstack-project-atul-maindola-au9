import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import { auth, provider } from '../firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from '../reducer';
const Login = () => {
	const [state, dispatch] = useStateValue();
	const signIn = () => {
		auth.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
				console.log(result);
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className='login'>
			<div className='login_logo'>
				<img
					src='https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png'
					alt='facebook logo'
				/>
				<img
					src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
					alt='facebook name logo'
				/>
			</div>
			<Button type='submit' onClick={signIn}>
				Sign In
			</Button>
		</div>
	);
};

export default Login;
