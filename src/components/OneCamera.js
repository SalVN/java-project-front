import React, { Component } from 'react';
import './OneCamera.css';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const camera = {
    make: 'abc',
    model: 'def',
    megapixels: 12
};

class CameraList extends Component {
    componentDidMount () {
        if (this.props.cameras.length < 1) {
            this.props.fetchOneCamera();
        }

        
    }
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

function mapStateToProps (state) {
  return {
    cameras: state.data,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCameras: () => {
      dispatch(actions.fetchOneCamera());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraList);