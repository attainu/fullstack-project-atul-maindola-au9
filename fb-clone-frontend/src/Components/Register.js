import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../Reducer';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Register = () => {
	const [state, dispatch] = useStateValue();

	const googleSignIn = () => {
		auth.signInWithPopup(provider)
			.then((result) => {
				console.log(result);

				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className='login'>
			<div className='login__logo'>
				<img
					src='https://www.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png'
					alt='fb circle'
				/>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png'
					alt='fb text'
				/>
			</div>
			<SignUp />
			<Button type='submit' onClick={googleSignIn}>
				<img
					style={{ height: '25px', paddingRight: '20px' }}
					src='https://img.icons8.com/fluent/48/000000/google-logo.png'
				/>
				<p> Google Sign In</p>
			</Button>
		</div>
	);
};

export default Register;
