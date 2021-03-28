const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys');
const requireLogin = require('../middleware/requireLogin');

router.get('/protected', requireLogin, (req, res) => {});

router.post('/signup', (req, res) => {
	console.log('req body>>>>', req.body);
	const { username, password, cpassword, image } = req.body;
	if (!username || password != cpassword) {
		res.status(422).json({ error: 'please add all the fields correctly' });
	}
	User.findOne({ username: username }).then((savedUser) => {
		if (savedUser) {
			return res.status(422).json({ error: 'user already exists' });
		}

		bcrypt
			.hash(req.body.password, 10)
			.then((crypted) => {
				const user = new User({
					username,
					password: crypted,
					cpassword: crypted,
					image: image,
				});

				user.save()
					.then(res.json({ message: 'user created' }))
					.catch((err) => {
						console.log('>>>>>>>>>', err);
					});
			})
			.catch((err) => {
				console.log('catch>>>>>', err);
			});
	});
});

router.post('/signin', (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		return res
			.status(422)
			.json({ error: 'please enter username or password' });
	}
	User.findOne({ username }).then((saveduser) => {
		if (!saveduser) {
			return res.status(422).json({ error: "user doesn't exist!" });
		}
		bcrypt
			.compare(req.body.password, saveduser.password)
			.then((matched) => {
				if (matched) {
					// res.json({ message: 'sign in successful' });
					const token = jwt.sign({ _id: saveduser._id }, JWT_SECRET);
					const { _id, username, password, image } = saveduser;
					res.status(202).json({
						token,
						user: { _id, username, password, image },
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
module.exports = router;
