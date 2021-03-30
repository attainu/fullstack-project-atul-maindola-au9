import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import M from 'materialize-css';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import swal from 'sweetalert';
import './SignIn.css';

const useStyles = makeStyles((theme) => ({
	paper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},

	input: {
		display: 'none',
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
	button: { width: '100%' },
}));

const SignUp = () => {
	const history = useHistory();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCpassword] = useState('');
	const [email, setEmail] = useState('');
	const [image, setImage] = useState('');
	const [imgURL, setImgURL] = useState('');

	const classes = useStyles();

	useEffect(() => {
		if (imgURL) {
			uploadData();
		}
	}, [imgURL]);

	const uploadData = () => {
		let signUpData = {};

		if (image) {
			signUpData = {
				username: username,
				email: email,
				password: password,
				cpassword: cpassword,
				image: imgURL,
			};
		} else {
			return (signUpData = {
				username: username,
				email: email,
				password: password,
				cpassword: cpassword,
				imgURL:
					'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png',
			});
		}
		fetch('/signup', {
			method: 'post',
			headers: {
				// 'Access-Control-Allow-Origin': 'http://localhost:3000',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(signUpData),
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

	const uploadPic = () => {
		if (image) {
			const data = new FormData();
			data.append('file', image);
			data.append('upload_preset', 'fb-clone');
			data.append('cloud_name', 'dkujunhej');

			fetch('https://api.cloudinary.com/v1_1/dkujunhej/image/upload', {
				method: 'POST',
				body: data,
			})
				.then((res) => res.json())
				.then((data) => setImgURL(data.url))
				.catch((err) => console.log(err));
		}
	};

	const PostData = (e) => {
		e.preventDefault();
		if (image) {
			uploadPic();
		} else {
			uploadData();
		}
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
								id='displayname'
								label='DISPLAY NAME'
								name='displayname'
								autoComplete='displayname'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								type='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								variant='outlined'
								required
								fullWidth
								id='email'
								label=' EMAIL ID'
								name='email'
								autoComplete='email'
							/>
						</Grid>
						<Grid item xs={12}>
							<div className={classes.root}>
								<input
									accept='image/*'
									onChange={(e) =>
										setImage(e.target.files[0])
									}
									className={classes.input}
									id='contained-button-file'
									multiple
									type='file'
								/>
								<label htmlFor='contained-button-file'>
									<Button
										startIcon={<CloudUploadIcon />}
										style={{
											color: 'grey',
											height: '55px',
											justifyContent: 'left',
										}}
										className={classes.button}
										variant='outlined'
										component='span'
									>
										Choose Profile Picture
									</Button>
								</label>
							</div>
						</Grid>
						<Grid item xs={12}>
							<TextField
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								variant='outlined'
								required
								fullWidth
								name='password'
								label='PASSWORD'
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
								label='CONFIRM PASSWORD'
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
