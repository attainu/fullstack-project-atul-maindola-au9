import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from "./components/Login";

const Router = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login} />;
        </BrowserRouter>
    )
}

export default Router;