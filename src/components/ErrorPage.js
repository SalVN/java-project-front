import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className="ErrorPage">
            <h2>That page does not exist</h2>
            <Link to='/cameras'><button className="cameraPageButton">Return to Cameras</button></Link>
        </div>
    );
};

export default ErrorPage;