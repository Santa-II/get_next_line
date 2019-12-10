import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { auth_isLogin } from '../../../actions';

import Home from '../../function/Home';
import Profile from '../../function/Profile';
import Explore from '../../function/Explore';
import Notifications from '../../function/Notifications';
import Analysis from '../../function/Analysis';
import Settings from '../../function/Settings';
import PublicHomePage from '../../function/PublicHomePage';
import Signup from '../../function/Signup';
import Login from '../../function/Login';

const Body = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const loggedIn = () => {
        return false;
    }

    return (
        <div className="body">
            <Switch>
                <Route exact path="/">
                    {auth.isLogin ? <Redirect to="/home" /> : <PublicHomePage />}
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/explore">
                    <Explore />
                </Route>
                <Route path="/notifications">
                    <Notifications />
                </Route>
                <Route path="/analysis">
                    <Analysis />
                </Route>
                <Route path="/settings">
                    <Settings />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
            </Switch>
        </div> 
    );
}

export default Body;