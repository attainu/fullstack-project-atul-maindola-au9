const express = require('express');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
	input: {
		type: String,
		trim: true,
	},
	imgName: {
		type: String,
		trim: true,
	},
	imgURL: {
		type: String,
		trim: true,
	},
	timestamp: {
		type: String,
	},
	username: {
		type: String,
	},
});

const PostDb = new mongoose.model('POSTDB', postSchema);

module.exports = PostDb;
