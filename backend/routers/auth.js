const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const mongoose = require('mongoose');
const User = require('../models/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');
const requireLogin = require('../middleware/requireLogin');

const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const { SENDGRID_API, EMAIL } = require('../config/keys');

const transporter = nodemailer.createTransport(
	sendgridTransport({
		auth: {
			api_key: SENDGRID_API,
		},
	})
);

router.post('/signup', (req, res) => {
	console.log('req body>>>>', req.body);
	const { username, password, cpassword, image, email } = req.body;
	if (!username || password != cpassword || !email) {
		res.status(422).json({ error: 'please add all the fields correctly' });
	}
	User.findOne({ username: username }).then((savedUser) => {
		if (savedUser) {
			return res.status(422).json({ error: 'user already exists' });
		}

		bcrypt.hash(req.body.password, 10).then((crypted) => {
			const user = new User({
				username,
				email,
				password: crypted,
				cpassword: crypted,
				image: image,
			});

			user.save()
				.then((user) => {
					transporter.sendMail({
						to: user.email,
						from: 'atulmaindola1210@gmail.com',
						subject: 'Signup Success',
						html: '<h1>Welcome to FB Clone</h1>',
					});
					res.json({ message: 'user created' });
				})
				.catch((err) => {
					console.log('>>>>>>>>>', err);
				});
		});
	});
});

router.post('/signin', (req, res) => {
	const { password, email } = req.body;
	if (!password || !email) {
		return res.status(422).json({ error: 'please fill all the fields' });
	}
	User.findOne({ email }).then((saveduser) => {
		if (!saveduser) {
			return res.status(422).json({ error: "user doesn't exist!" });
		}
		bcrypt
			.compare(req.body.password, saveduser.password)
			.then((matched) => {
				if (matched) {
					// res.json({ message: 'sign in successful' });
					const token = jwt.sign({ _id: saveduser._id }, JWT_SECRET);
					const {
						_id,
						username,
						password,
						image,
						email,
						cpassword,
					} = saveduser;
					res.status(202).json({
						token,
						user: {
							_id,
							username,
							password,
							image,
							email,
							cpassword,
						},
					});
				} else {
					return res
						.status(422)
						.json({ error: 'invalid credentials' });
				}
			})
			.catch((err) => {
				console.log(err);
			});
	});
});

router.post('/resetpassword', (req, res) => {
	crypto.randomBytes(32, (err, buffer) => {
		if (err) {
			console.log(err);
		}
		const token = buffer.toString('hex');
		User.findOne({ email: req.body.email }).then((user) => {
			console.log(req.body, user);
			if (!user) {
				return res.status(422).json({ error: "User doesn't exist" });
			}
			user.resettoken = token;
			user.expire = Date.now() + 3600000;
			user.save()
				.then((result) => {
					transporter.sendMail({
						to: user.email,
						from: 'atulmaindola1210@gmail.com',
						subject: 'Request to reset password',
						html: `<h1>Reset Your Password</h1>
						<h4>Click the following link to reset the password. 
						Link is valid for 1 Hour.</h4>
						http://localhost:3000/resetpassword/${token}`,
					});
					// history.push(`/resetpassword/${token}`);
					res.json({ message: 'Reset link sent check your email' });
				})
				.catch((err) => console.log(err));
		});
	});
});

router.post('/newpassword', (req, res) => {
	const newPassword = req.body.password;
	const sentToken = req.body.token;
	User.findOne({
		resettoken: sentToken,
		expire: { $gt: Date.now() },
	}).then((user) => {
		if (!user) {
			return res
				.status(422)
				.json({ error: 'Try Again Session Has Expired' });
		}

		bcrypt
			.hash(newPassword, 10)
			.then((crypted) => {
				user.password = crypted;
				user.cpassword = crypted;
				user.resettoken = undefined;
				user.expire = undefined;
				user.save().then((saveduser) => {
					res.json({ message: 'Password Updated' });
				});
			})
			.catch((err) => console.log(err));
	});
});

module.exports = router;
