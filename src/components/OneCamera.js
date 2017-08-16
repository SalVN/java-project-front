import React, { Component } from 'react';
import './OneCamera.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const camera = {
    make: 'abc',
    model: 'def',
    megapixels: 12
};

class CameraList extends Component {
    render() {
        return (
            <div>
                <h1>{camera.make}</h1>
                <h3>{camera.model}</h3>
                <p>{`megapixels: ${camera.megapixels}`}</p>
                <Link to='/cameras'><button className="cameraPageButton">Return to Cameras</button></Link>
            </div>
        );
    }
}

export default CameraList;