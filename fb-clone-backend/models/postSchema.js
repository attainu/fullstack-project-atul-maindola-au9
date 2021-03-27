const express = require('express');
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	input: {
		type: String,
		trim: true,
	},
	imgName: {
		type: String,
		trim: true,
	},
	base64string: {
		type: String,
		trim: true,
	},
	user: {
		type: String,
		trim: true,
	},
	avatar: {
		type: String,
		trim: true,
	},
	timestamp: {
		type: String,
	},
});

const PostDb = new mongoose.model('POSTDB', postSchema);

module.exports = PostDb;
