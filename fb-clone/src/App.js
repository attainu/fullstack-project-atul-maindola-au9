import React from 'react';
import Feed from './components/Feed';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import './App.css';

const App = () => {
	return (
		<div className='app'>
			<Header />
			<div className='app_body'>
				<LeftSidebar />
				<Feed />
			</div>
		</div>
	);
};

export default App;
