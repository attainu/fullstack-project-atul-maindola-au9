// const express = require("express");
const mongoose = require('mongoose');
// const jwt = require("jsonwebtoken");

const Userschema = new mongoose.Schema({
	username: {
		type: String,
		trim: true,
	},
	email: {
		type: String,
	},
	password: {
		type: String,
	},
	cpassword: {
		type: String,
	},
	image: {
		type: String,
	},
	resettoken: {
		type: String,
	},
	expire: {
		type: Date,
	},
});

const User = new mongoose.model('User', Userschema);
module.exports = User;
