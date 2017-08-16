import React, {Component} from 'react';
import './CameraBox.css';

class CameraBox extends Component {
    render () {
        let colour = (this.props.index % 2 === 0) ? 'even' : 'odd';
        return (
            <div className={`cameraBox ${colour}`}>
                <h3 className="cameraBoxTitle">Make</h3>
                <h4 className="cameraBoxSubtitle">Model</h4>
                <button className="cameraBoxButton" disabled>More Info</button>
            </div>
        );
    }
}

export default CameraBox;