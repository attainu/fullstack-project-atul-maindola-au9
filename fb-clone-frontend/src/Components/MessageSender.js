import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar, Input } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../StateProvider';
import axios from '../axios';

const MessageSender = () => {
	const [input, setInput] = useState('');
	const [{ user }, dispatch] = useStateValue();
	const [image, setImage] = useState();
	const [fileBase64String, setFileBase64String] = useState('');

	const handleChange = (e) => {
		setImage(e.target.files);
	};

	const encodeFileBase64 = (img) => {
		const reader = new FileReader();
		if (img) {
			reader.readAsDataURL(img[0]);
			reader.onload = () => {
				const Base64 = reader.result;
				setFileBase64String(Base64);
			};
			reader.onerror = (error) => {
				console.log('error>>>>', error);
			};
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let postData = {};

		if (image) {
			postData = {
				input: input,
				imgName: image[0].name,
				base64string: fileBase64String,
				user: user.displayName,
				avatar: user.photoURL,
				timestamp: Date.now(),
			};
			console.log('>>>>>', postData);
		} else {
			postData = {
				input: input,
				imgName: '',
				base64string: '',
				user: user.displayName,
				avatar: user.photoURL,
				timestamp: Date.now(),
			};
		}

		axios
			.post('/post', postData, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					'Accept-Language': 'en-US,en;q=0.8',
					'Access-Control-Allow-Origin': '*',
				},
			})
			.then((res) => {
				console.log('data getting stored in post data>>>', res.data);
			});
		setInput('');
		setImage(null);
		setFileBase64String('');
	};

	return (
		<div className='messageSender'>
			<div className='messageSender__top'>
				<Avatar src={user.photoURL} />
				<form>
					<input
						type='text'
						className='messageSender__input'
						placeholder="What's on your mind?"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<Input
						type='file'
						className='messageSender__fileSelector'
						value={encodeFileBase64(image)}
						onChange={handleChange}
					/>
					<button onClick={handleSubmit} type='submit'>
						Hidden Submit
					</button>
				</form>
			</div>
			<div className='messageSender__bottom'>
				<div className='messageSender__option'>
					<VideocamIcon style={{ color: 'red' }} />
					<h3>Live Video</h3>
				</div>
				<div className='messageSender__option'>
					<PhotoLibraryIcon style={{ color: 'green' }} />
					<h3>Photo/Video</h3>
				</div>
				<div className='messageSender__option'>
					<InsertEmoticonIcon style={{ color: 'orange' }} />
					<h3>Feeling/Activity</h3>
				</div>
			</div>
		</div>
	);
};

export default MessageSender;
