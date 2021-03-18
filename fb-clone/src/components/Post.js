import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import NearMeIcon from '@material-ui/icons/NearMe';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useStateValue } from './StateProvider';

const Post = ({ profilePic, imgName, username, timestamp, message }) => {
	const [{ user }, dispatch] = useStateValue();

	return (
		<div className='post'>
			<div className='post_top'>
				<Avatar src={user.photoURL} className='post_avatar' />
				<div className='post_topInfo'>
					<h3>{user.displayName}</h3>
					<p>{new Date(parseInt(timestamp)).toGMTString}</p>
				</div>
			</div>

			<div className='post_bottom'>
				<p>Hello Facebook!!!</p>
			</div>
			<div className='post_options'>
				<div className='post_option'>
					<ThumbUpIcon />
					<p>Like</p>
				</div>
				<div className='post_option'>
					<ChatBubbleOutlineIcon />
					<p>Comment</p>
				</div>
				<div className='post_option'>
					<NearMeIcon />
					<p>Share</p>
				</div>
				<div className='post_option'>
					<AccountCircleIcon />
					<ExpandMoreOutlinedIcon />
				</div>
			</div>
		</div>
	);
};

export default Post;
