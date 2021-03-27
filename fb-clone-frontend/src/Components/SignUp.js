import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},

	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(2),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	footNote: {
		marginBottom: theme.spacing(2),
	},
}));

const SignUp = () => {
	const history = useHistory();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCpassword] = useState('');

	const classes = useStyles();

	const PostData = (e) => {
		e.preventDefault();

		fetch('/signup', {
			method: 'post',
			headers: {
				// 'Access-Control-Allow-Origin': 'http://localhost:3000',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				password,
				cpassword,
			}),
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data.error ? data.error : data);
				history.push('/');
			})
			.catch((err) => console.log(err));
	};

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component='h1' variant='h5'>
					Sign up
				</Typography>
				<form onSubmit={PostData} className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								variant='outlined'
								required
								fullWidth
								id='username'
								label=' Username'
								name='username'
								autoComplete='username'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								variant='outlined'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								value={cpassword}
								onChange={(e) => setCpassword(e.target.value)}
								variant='outlined'
								required
								fullWidth
								name='confirmpassword'
								label='Confirm Password'
								type='text'
								id='confirmpassword'
								autoComplete='current-confirmpassword'
							/>
						</Grid>
					</Grid>
					<Button
						style={{ background: '#2e81f4' }}
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
						// onClick={() => PostData()}
					>
						Sign Up
					</Button>
					<Grid
						container
						justify='center'
						className={classes.footNote}
					>
						<Grid item>
							<Link to='/' variant='body2'>
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
};

export default SignUp;
