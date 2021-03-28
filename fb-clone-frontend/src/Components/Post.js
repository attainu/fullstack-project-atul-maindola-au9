import { Avatar } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleIclon from '@material-ui/icons/AccountCircle';
import { UserContext } from '../App';

const Post = ({ input, imgName, imgURL, timestamp, username }) => {
	const { state, dispatch } = useContext(UserContext);

	return (
		<div className='post'>
			<div className='post__top'>
				<Avatar
					src={
						'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
					}
					className='post__avatar'
				/>
				<div className='post__topInfo'>
					<h3>{username}</h3>
					<p>{new Date(parseInt(timestamp)).toUTCString()}</p>
				</div>
			</div>
			<div className='post__bottom'>
				<p>{input}</p>
			</div>

			{imgName ? (
				<div className='post__image'>
					<img src={imgURL} />
				</div>
			) : (
				console.log('DEBUG >>> no image here')
			)}

			<div className='post__options'>
				<div className='post__option'>
					<ThumbUpIcon />
					<p>Like</p>
				</div>
				<div className='post__option'>
					<ChatBubbleOutlineIcon />
					<p>Comment</p>
				</div>
				<div className='post__option'>
					<NearMeIcon />
					<p>Share</p>
				</div>
				<div className='post__option'>
					<AccountCircleIclon />
					<ExpandMoreOutlined />
				</div>
			</div>
		</div>
	);
};

export default Post;
