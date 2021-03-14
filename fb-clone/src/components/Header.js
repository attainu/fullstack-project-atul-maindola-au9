import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import FlagIcon from '@material-ui/icons/Flag';
import HomeIcon from '@material-ui/icons/Home';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './Header.css';

const Header = () => {
	return (
		<div className='header'>
			<div className='header_left'>
				<img
					src='https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png'
					alt='Facebook logo'
				/>
			</div>
			<div className='header_input'>
				<SearchIcon />
				<input placeholder='Search Facebook' type='text' />
			</div>

			<div className='header_center'>
				<div className='header_option header_option--active'>
					<HomeIcon fontsize='large' />
				</div>
				<div className='header_option'>
					<FlagIcon fontsize='large' />
				</div>
				<div className='header_option'>
					<SubscriptionsOutlinedIcon fontsize='large' />
				</div>
				<div className='header_option'>
					<SupervisedUserCircleIcon fontsize='large' />
				</div>
			</div>

			<div className='header_right'>
				<div className='header_info'>
					<Avatar />
					<h4>Atul</h4>
				</div>
				<IconButton>
					<AddIcon />
				</IconButton>
				<IconButton>
					<ForumIcon />
				</IconButton>
				<IconButton>
					<NotificationActiveIcon />
				</IconButton>
				<IconButton>
					<ExpandMoreIcon />
				</IconButton>
			</div>
		</div>
	);
};

export default Header;
