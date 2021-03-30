import { Avatar } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import { UserContext } from '../App';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import swal from 'sweetalert';

const Post = ({ id, input, userimage, imgURL, likes, timestamp, username }) => {
	const { state, dispatch } = useContext(UserContext);
	const [anchorEl, setAnchorEl] = useState(null);

	const [liked, setLiked] = useState(
		likes.includes(state._id) ? true : false
	);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const likePost = (postId) => {
		if (!likes.includes(state._id)) {
			fetch('/like', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + localStorage.getItem('jwt'),
				},
				body: JSON.stringify({
					postId: postId,
				}),
			})
				.then((res) => res.json())
				.then(() => {
					setLiked(true);
				});
		} else {
			fetch('/unlike', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + localStorage.getItem('jwt'),
				},
				body: JSON.stringify({
					postId: postId,
				}),
			})
				.then((res) => res.json())
				.then(() => {
					setLiked(false);
				});
		}
	};

	const deletePost = () => {
		setAnchorEl(null);

		fetch(`/deletepost`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('jwt'),
			},
			body: JSON.stringify({
				postId: id,
			}),
		})
			.then((res) => res.json())
			.then((result) => {
				setAnchorEl(null);
			});
	};

	const editPost = async () => {
		setAnchorEl(null);
		const newInput = await swal('Enter new status:', {
			content: 'input',
		});
		fetch(`/editpost`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('jwt'),
			},
			body: JSON.stringify({
				postId: id,
				input: newInput,
			}),
		})
			.then((res) => res.json())
			.then((result) => {
				setAnchorEl(null);
			});
	};

	return (
		<div className='post'>
			<div className='post__top'>
				<Avatar src={userimage} className='post__avatar' />
				<div className='post__topInfo'>
					<h3>{username}</h3>
					<p>{new Date(parseInt(timestamp)).toUTCString()}</p>
				</div>
			</div>
			<div className='post__bottom'>
				<p>{input}</p>
			</div>

			{imgURL ? (
				<div className='post__image'>
					<img src={imgURL} />
				</div>
			) : (
				''
			)}

			<div className='post__options'>
				<div
					style={liked ? { color: 'blue' } : { color: '' }}
					onClick={() => {
						likePost(id);
					}}
					className='post__option like'
				>
					<ThumbUpIcon />
					<p>
						{likes.length === 0 ? '' : likes.length}{' '}
						{likes.length === 1 || likes.length === 0
							? 'Like'
							: 'Likes'}
					</p>
				</div>

				<div className='post__option'>
					<ChatBubbleOutlineIcon />
					<p>Comment</p>
				</div>
				<div className='post__option'>
					<ShareIcon />
					<p>Share</p>
				</div>
				<div className='post__option'>
					<MoreHorizOutlinedIcon
						aria-controls='simple-menu'
						aria-haspopup='true'
						onClick={handleClick}
					/>

					<div>
						<Menu
							id='simple-menu'
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							{username === state.username ? (
								<>
									<MenuItem onClick={editPost}>Edit</MenuItem>
									<MenuItem onClick={deletePost}>
										Delete
									</MenuItem>
								</>
							) : null}

							<MenuItem onClick={handleClose}>Report</MenuItem>
						</Menu>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
