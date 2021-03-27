import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';

const Router = () => {
	return (
		<BrowserRouter>
			<Route exact path='/' component={Login} />;
			<Route exact path='/register' component={Register} />
			<Route exact path='/home' component={Home} />
		</BrowserRouter>
	);
};

export default Router;
