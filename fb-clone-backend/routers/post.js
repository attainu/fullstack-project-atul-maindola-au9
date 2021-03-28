const express = require('express');
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const router = express.Router();
const PostDb = require('../models/postSchema');

router.post('/post', (req, res) => {
	const { input, imgName, imgURL, timestamp, username } = req.body;
	const post = new PostDb({
		input,
		imgName,
		imgURL,
		timestamp,
		username,
	});
	console.log(req.body, post);
	post.save()
		.then((result) => {
			res.status(201).json({ post: result });
		})
		.catch((err) => {
			res.status(500);
		});
});

router.get('/retrievepost', (req, res) => {
	PostDb.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			data.sort((b, a) => {
				return a.timestamp - b.timestamp;
			});
			res.status(200).send(data);
		}
	});
});

module.exports = router;
