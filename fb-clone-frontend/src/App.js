import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import reducer, { initialState } from './Reducer';
import './App.css';

export const UserContext = createContext();

const Routing = () => {
	const history = useHistory();
	const { state, dispatch } = useContext(UserContext);
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user) {
			dispatch({ type: 'USER', payload: user });
			history.push('/home');
		} else {
			history.push('/');
		}
	}, []);
	return (
		<Switch>
			<Route exact path='/' component={Login} />;
			<Route exact path='/register' component={Register} />
			<Route exact path='/home' component={Home} />
		</Switch>
	);
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<UserContext.Provider value={{ state, dispatch }}>
			<BrowserRouter>
				<Routing />
			</BrowserRouter>
		</UserContext.Provider>
	);
};

export default App;
