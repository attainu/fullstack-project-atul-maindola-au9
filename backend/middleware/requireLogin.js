const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
	const { authorization } = req.headers;
	if (!authorization) {
		return res.status(401).json({ error: 'you must be logged in' });
	}
	const token = authorization.replace('Bearer ', '');
	jwt.verify(token, JWT_SECRET, (err, payload) => {
		if (err) {
			return res.status(401).json({ error: 'you must be logged in' });
		}

		const { _id } = payload;
		User.findOne({ _id }).then((userdata) => {
			req.user = userdata;
			next();
		});
	});
};
// const User = require('../models/usermodel');
// const { verify } = require('jsonwebtoken');
// var middleware = {};
// middleware.authentication = async (req, res, next) => {
// 	var authToken = req.header('Authorization');
// 	if (authToken) {
// 		console.log(authToken);
// 		try {
// 			const decode = verify(authToken, process.env.SECRET_KEY);
// 			const user = await User.findOne({ email: decode.email });
// 			console.log(user.email);
// 			req.user = user;
// 			next();
// 		} catch (err) {
// 			console.log('Here is the error', err.message);
// 		}
// 	} else {
// 		res.status(401).send('require Authorization Token');
// 	}
// };
// module.exports = middleware;
