import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <div className="AppHeader">
            <Link to='/cameras' style={{ textDecoration: 'none' }}><h1 className="AppTitle">Cameras</h1></Link>
            <Link to='/cameras/add'><button className="cameraAddButton">Add a Camera</button></Link>
        </div>
    );
};

export default Header;