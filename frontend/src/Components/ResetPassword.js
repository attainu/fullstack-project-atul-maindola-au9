import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
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

const ResetPassword = () => {
	const [email, setEmail] = useState('');
	const history = useHistory();
	const classes = useStyles();

	const PostData = (e) => {
		e.preventDefault();
		console.log(email);
		fetch('/resetpassword', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
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
							Enter Your Email
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
								id='email'
								label='Email ID'
								name='email'
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								autoComplete='email'
								autoFocus
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
								Send Reset Password Link{' '}
							</Button>
						</form>
					</div>
				</Container>
			}
		</div>
	);
};

export default ResetPassword;
