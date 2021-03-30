import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { UserContext } from '../App';
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

const SignIn = () => {
	const { state, dispatch } = useContext(UserContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();
	const classes = useStyles();

	const PostData = (e) => {
		e.preventDefault();
		console.log(email, password);
		fetch('/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data.error) {
					swal('Invalid Credentials');
				} else {
					M.toast({
						html: 'Sign In Successful',
						classes: 'rounded #7cb342 light-green darken-1',
					});
					localStorage.setItem('jwt', data.token);
					localStorage.setItem('user', JSON.stringify(data.user));
					dispatch({ type: 'USER', payload: data.user });
					history.push('/home');
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<Container component='main' maxWidth='xs'>
			{/* <CssBaseline /> */}
			<div className={classes.paper}>
				<Typography component='h2' variant='h5'>
					Sign in
				</Typography>
				<form onSubmit={PostData} className={classes.form} noValidate>
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
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						autoComplete='current-password'
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
						Sign In
					</Button>
					<Grid container style={{ marginBottom: '30px' }}>
						<Grid item xs>
							<Link to='/resetpassword' variant='body2'>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link to='/register' variant='body2'>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
};

export default SignIn;
