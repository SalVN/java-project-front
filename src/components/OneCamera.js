import React, { Component } from 'react';
import './OneCamera.css';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class OneCamera extends Component {
    componentDidMount() {
        this.props.fetchOneCamera(this.props.match.params.cameraId);
    }
    render() {
        return (
            <div>
                <h1>{this.props.camera.make}</h1>
                <h3>{this.props.camera.model}</h3>
                <p>{`megapixels: ${this.props.camera.megapixels}`}</p>
                <Link to='/cameras'><button className="cameraPageButton">Return to Cameras</button></Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        camera: state.onecamera.data,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchOneCamera: (id) => {
            dispatch(actions.fetchOneCamera(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OneCamera);