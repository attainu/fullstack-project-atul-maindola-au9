import React, { useEffect, useState } from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import axios from '../axios';
import Pusher from 'pusher-js';

const pusher = new Pusher('c8fd52786f7ddd6cd929', {
	cluster: 'ap2',
});

const Feed = () => {
	const [profilePic, setProfilePic] = useState('');
	const [postsData, setPostsData] = useState([]);

	const syncFeed = () => {
		axios.get('/retrievepost').then((res) => {
			console.log('retrieved posts data>>>>>', res.data);
			setPostsData(res.data);
		});
	};

	useEffect(() => {
		const channel = pusher.subscribe('postdbs');
		channel.bind('inserted', function (data) {
			syncFeed();
		});
	}, []);

	useEffect(() => {
		syncFeed();
	}, []);

	return (
		<div className='feed'>
			<StoryReel />
			<MessageSender />

			{postsData.map((entry) => (
				<Post
					avatar={entry.avatar}
					input={entry.input}
					timestamp={entry.timestamp}
					imgName={entry.imgName}
					user={entry.user}
					base64string={entry.base64string}
				/>
			))}
		</div>
	);
};

export default Feed;
