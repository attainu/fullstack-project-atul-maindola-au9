import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory, useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import M from 'materialize-css';
import swal from 'sweetalert';
import './SignIn.css';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},

	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(0),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const NewPassword = () => {
	const { token } = useParams();
	console.log(token);
	const [password, setPassword] = useState('');
	const [cpassword, setCpassword] = useState('');

	const history = useHistory();
	const classes = useStyles();

	const PostData = (e) => {
		e.preventDefault();
		fetch('/newpassword', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				password,
				token,
			}),
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data.error) {
					swal(data.error);
				} else {
					swal(data.message);

					history.push('/');
				}
			})
			.catch((err) => console.log(err));
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

			{
				<Container component='main' maxWidth='xs'>
					<div className={classes.paper}>
						<Typography component='h2' variant='h5'>
							Reset Your Password
						</Typography>
						<form
							onSubmit={PostData}
							className={classes.form}
							noValidate
						>
							<TextField
								variant='outlined'
								margin='normal'
								required
								fullWidth
								name='password'
								label='Enter New Password'
								type='password'
								id='password'
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								autoComplete='current-password'
							/>
							<TextField
								variant='outlined'
								margin='normal'
								required
								fullWidth
								name='cpassword'
								label='Confirm Password'
								type='cpassword'
								id='cpassword'
								onChange={(e) => setCpassword(e.target.value)}
								value={cpassword}
								autoComplete='current-cpassword'
							/>

							<Button
								style={{ background: '#2e81f4' }}
								type='submit'
								fullWidth
								variant='contained'
								color='primary'
								className={classes.submit}
								// onSubmit={() => PostData()}
							>
								Set New Password
							</Button>
						</form>
					</div>
				</Container>
			}
		</div>
	);
};

export default NewPassword;
