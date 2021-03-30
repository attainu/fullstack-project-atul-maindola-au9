import React, { useEffect, useState } from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import axios from 'axios';
import Pusher from 'pusher-js';

const pusher = new Pusher('c8fd52786f7ddd6cd929', {
	cluster: 'ap2',
});

const Feed = () => {
	const [profilePic, setProfilePic] = useState('');
	const [postsData, setPostsData] = useState([]);

	const syncFeed = () => {
		axios.get('/retrievepost').then((res) => {
			setPostsData(res.data);
		});
	};

	useEffect(() => {
		const channel = pusher.subscribe('postdbs');
		channel.bind('inserted' || 'updated', function (data) {
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
					id={entry._id}
					input={entry.input}
					timestamp={entry.timestamp}
					userimage={entry.userimage}
					username={entry.username}
					imgURL={entry.imgURL}
					likes={entry.likes}
				/>
			))}
		</div>
	);
};

export default Feed;
