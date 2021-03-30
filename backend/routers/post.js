const express = require('express');
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const router = express.Router();
const PostDb = require('../models/postSchema');
mongoose.set('useFindAndModify', false);

router.post('/post', (req, res) => {
	const { input, userimage, imgURL, timestamp, username } = req.body;
	const post = new PostDb({
		input,
		userimage,
		imgURL,
		timestamp,
		username,
	});
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

router.put('/like', requireLogin, (req, res) => {
	const { postId } = req.body;
	PostDb.findByIdAndUpdate(
		postId,
		{
			$push: { likes: req.user._id },
		},
		{ new: true }
	).exec((err, result) => {
		if (err) {
			return res.status(422).json({ error: err });
		} else {
			res.json(result);
		}
	});
});

router.put('/unlike', requireLogin, (req, res) => {
	const { postId } = req.body;
	PostDb.findByIdAndUpdate(
		postId,
		{
			$pull: { likes: req.user._id },
		},
		{ new: true }
	).exec((err, result) => {
		if (err) {
			return res.status(422).json({ error: err });
		} else {
			res.json(result);
		}
	});
});

router.delete('/deletepost', requireLogin, (req, res) => {
	console.log(req.body);
	const { postId } = req.body;
	PostDb.findOne({ _id: postId }).exec((err, post) => {
		console.log('post>>>', post);
		if (err || !post) {
			return res.status(422).json({ error: err });
		}
		if (post.username === req.user.username) {
			post.remove()
				.then((res) => res.json({ message: 'Post Deleted' }))
				.catch((err) => console.log(err));
		}
	});
});

router.put('/editpost', requireLogin, (req, res) => {
	console.log(req.body);
	const { postId } = req.body;
	PostDb.findByIdAndUpdate(
		postId,
		{
			input: req.body.input,
		},
		{ new: true }
	).exec((err, result) => {
		if (err) {
			return res.status(422).json({ error: err });
		} else {
			res.json(result);
		}
	});
});

module.exports = router;
