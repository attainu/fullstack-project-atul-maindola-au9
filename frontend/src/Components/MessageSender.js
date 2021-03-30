import React, { useState, useEffect, useContext } from 'react';
import './MessageSender.css';
import { Avatar, Input } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { UserContext } from '../App';

const MessageSender = () => {
	const { state, dispatch } = useContext(UserContext);
	const [input, setInput] = useState('');
	const [image, setImage] = useState();
	const [imgURL, setImgURL] = useState('');

	useEffect(() => {
		if (imgURL) {
			uploadPost();
		}
	}, [imgURL]);

	const handleChange = (e) => {
		setImage(e.target.files[0]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(state);
		if (image) {
			uploadPic();
		} else {
			uploadPost();
		}
	};

	const uploadPic = () => {
		const data = new FormData();
		data.append('file', image);
		data.append('upload_preset', 'fb-clone');
		data.append('cloud_name', 'dkujunhej');

		fetch('https://api.cloudinary.com/v1_1/dkujunhej/image/upload', {
			method: 'POST',
			body: data,
		})
			.then((res) => res.json())
			.then((data) => setImgURL(data.url))
			.catch((err) => console.log(err));
	};
	const uploadPost = () => {
		let postData = {};
		if (image) {
			postData = {
				input: input,
				userimage: state.image,
				imgURL: imgURL,
				timestamp: Date.now(),
				username: state.username,
			};
			console.log('>>>>>', postData);
		} else {
			postData = {
				input: input,
				userimage: state.image,
				imgURL: '',
				timestamp: Date.now(),
				username: state.username,
			};
		}

		fetch('/post', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Accept-Language': 'en-US,en;q=0.8',
				// 'Access-Control-Allow-Origin': '*',
			},
			body: JSON.stringify(postData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log('data getting stored in post data>>>', data);
			})
			.catch((err) => console.log(err));
		setInput('');
		setImage(null);
		setImgURL('');
	};
	return (
		<div className='messageSender'>
			<div className='messageSender__top'>
				<Avatar src={state.image} />
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
						// value={imageDetails()}
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
