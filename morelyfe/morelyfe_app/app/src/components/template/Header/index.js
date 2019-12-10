import React from 'react';

import HeaderLogo from '../../../resources/Logo_moreLyfe_Header.png';

import './index.css';

const Header = () => {
    return (
        <div className="header">
            <img className="header-logo" src={HeaderLogo} alt="moreLyfe" />
        </div>
    )
}

export default Header;