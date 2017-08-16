import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import CameraBox from './CameraBox';
import { BrowserRouter as Router, Link } from 'react-router-dom';


class CameraList extends Component {
    
    componentDidMount() {
        this.props.fetchCameras();
    }
    render() {
        return (
            <div>
                {
                    (this.props.cameras && this.props.cameras.length > 0)
                    ? this.props.cameras.map((camera, i) => {
                        return (
                            <CameraBox
                                key={i}
                                index={i}
                                camera={camera} />
                        );
                    })
                    : <p>Loading</p>
                }
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCameras: () => {
            dispatch(actions.fetchCameras());
        }
    };
}

function mapStateToProps(state) {
    return {
        cameras: state.cameras.data,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraList);