import React from 'react';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

const Home = () => {
	return (
		<div className='App'>
			<div>
				<Header />

				<div className='app__body'>
					<Sidebar />
					<Feed />
				</div>
			</div>
		</div>
	);
};

export default Home;
