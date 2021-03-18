import React from 'react';
import Feed from './components/Feed';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import './App.css';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';

const App = () => {
	const [{ user }, dispatch] = useStateValue();
	return (
		<div className='app'>
			{!user ? (
				<Login />
			) : (
				<>
					<Header />
					<div className='app_body'>
						<LeftSidebar />
						<Feed />
					</div>
				</>
			)}
		</div>
	);
};

export default App;
