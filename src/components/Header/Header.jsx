// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='Header-container'>
            <div className="logo">
                <h2>Learning Zone</h2>
            </div>
            <div className="menu">
                <a href="#">Home</a>
                <a href="#">Blogs</a>
                <a href="#">Contact</a>
            </div>
            <div className="user">
                <img src="../../../images/boy1.png" alt="" />
            </div>
        </div>
    );
};

export default Header;