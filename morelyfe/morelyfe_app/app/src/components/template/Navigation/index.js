import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaKeybase, FaSearch, FaBook, FaBell, FaCog } from 'react-icons/fa';

import Logo from '../../../resources/Logo.png';
import './index.css';

const iconSize = 32;

const activeStyle = {
    textDecoration: 'none',
    color: '#B666D3',
    fontWeight: 'bold'
    
}

const  inactiveStyle = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold'

}

function Navigation() {
    return (
        <nav className="menu">
            <a href="/" className="logo-link"><img className="Logo" src={Logo} alt="moreLyfe Logo" /></a>
            <ul>
                <li>
                    <NavLink to="/home" style={inactiveStyle} activeStyle={activeStyle}><FaHome size={iconSize} /><p className="link">Home</p></NavLink>
                </li>
                <li>
                    <NavLink to="/profile" style={inactiveStyle} activeStyle={activeStyle}><FaKeybase size={iconSize} /><p className="link">Profile</p></NavLink>
                </li>
                <li>
                    <NavLink to="/explore" style={inactiveStyle} activeStyle={activeStyle}><FaSearch size={iconSize}  /><p className="link">Explore</p></NavLink>
                </li>
                <li>
                    <NavLink to="/notifications" style={inactiveStyle} activeStyle={activeStyle}><FaBell size={iconSize}  /><p className="link">Notifications</p></NavLink>
                </li>
                <li>
                    <NavLink to="/analysis" style={inactiveStyle} activeStyle={activeStyle}><FaBook size={iconSize}   /><p className="link">Analysis</p></NavLink>
                </li>
                <li>
                    <NavLink to="/settings" style={inactiveStyle} activeStyle={activeStyle}><FaCog size={iconSize}    /><p className="link">Settings</p></NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation