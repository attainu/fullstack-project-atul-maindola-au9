import React from 'react';
import './Login.css';
import SignUp from './SignUp';

const Register = () => {
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
		</div>
	);
};

export default Register;
