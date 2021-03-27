// const express = require("express");
const mongoose = require('mongoose');
// const jwt = require("jsonwebtoken");
const { response } = require('express');

const Userschema = new mongoose.Schema({
	username: {
		type: String,
		trim: true,
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
	// tokens: [
	//     {
	//         token: {
	//             type: String,
	//             required: true,
	//         },
	//     },
	// ],
});

// Userschema.methods.genrateAuthToken = async function () {
//     try {
//         const token = jwt.sign(
//             { _id: this._id.toString() },
//             "couponvalidationcheckfunctionality"
//         );
//         this.tokens = this.tokens.concat({ token: token });
//         await this.save();
//     } catch (error) {
//         console.log(error);
//     }
// };

const User = new mongoose.model('User', Userschema);
module.exports = User;
