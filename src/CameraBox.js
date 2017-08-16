import React, {Component} from 'react';
import './CameraBox.css';
import PropTypes from 'prop-types';

class CameraBox extends Component {
    render () {
        let colour = (this.props.index % 2 === 0) ? 'even' : 'odd';
        return (
            <div className={`cameraBox ${colour}`}>
                <h3 className="cameraBoxTitle">{this.props.camera.make}</h3>
                <h4 className="cameraBoxSubtitle">{this.props.camera.model}</h4>
                <button className="cameraBoxButton" disabled>More Info</button>
            </div>
        );
    }
}

CameraBox.propTypes = {
    camera: PropTypes.object.isRequired
};

export default CameraBox;