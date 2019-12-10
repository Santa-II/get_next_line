import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ui_nav } from '../../../actions';

import './index.css';
//import Login from './Login';


const PublicHomePage = () => {
    const ui = useSelector(state => state.ui);
    const dispatch = useDispatch();

    useEffect(() => {
        if(ui.nav === 0)
            dispatch(ui_nav(1));
    })
    
    return (
        <div className="public-main">
            <h2>Start motivate yourself to achieve your goal</h2>
            <p>Join moreLyfe today.</p>
            
            <Link to="/signup"><button className="signup-button" type="button">Sign up</button></Link>
            <Link to="/login"><button className="login-button" type="button">Log in</button></Link>
            <div>
                <h2>design for why you need to join.</h2>
            </div>
        </div>
    )
}

export default PublicHomePage;