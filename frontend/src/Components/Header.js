import React, { useContext } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { UserContext } from '../App';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

const Header = () => {
	const { state, dispatch } = useContext(UserContext);
	const history = useHistory();
	const classes = useStyles();
	return (
		<div className='header'>
			<div className='header__left'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png'
					alt='Facebook logo'
				/>
			</div>

			<div className='header__input'>
				<SearchIcon />
				<input placeholder='Search Facebook' type='text' />
			</div>

			<div className='header__center'>
				<div className='header__option header__option--active'>
					<HomeIcon fontsize='large' />
				</div>
				<div className='header__option'>
					<FlagIcon fontsize='large' />
				</div>
				<div className='header__option'>
					<SubscriptionsOutlinedIcon fontsize='large' />
				</div>
				<div className='header__option'>
					<StorefrontOutlinedIcon fontsize='large' />
				</div>
				<div className='header__option'>
					<SupervisedUserCircleIcon fontsize='large' />
				</div>
			</div>

			<div className='header__right'>
				<div className='header__info'>
					<Avatar src={state.image} />
					<h4>{state.username}</h4>
				</div>

				<IconButton>
					<AddIcon />
				</IconButton>

				<IconButton>
					<ForumIcon />
				</IconButton>

				<IconButton>
					<NotificationsActiveIcon />
				</IconButton>

				<div className={classes.root}>
					<Button
						variant='contained'
						onClick={() => {
							localStorage.clear();
							dispatch({ type: 'CLEAR' });
							history.push('/');
						}}
						size='small'
						color='secondary'
						style={{ background: 'maroon' }}
						className={classes.margin}
					>
						Logout
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Header;
