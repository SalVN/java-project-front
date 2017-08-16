import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import CameraBox from './CameraBox';

class CameraList extends Component {
    componentDidMount () {
        this.props.fetchCameras();
    }
    render() {
        return (
            <div>
                {this.props.cameras.map((camera, i) => {
                    return (
                        <CameraBox
                            key={i}
                            index={i}
                            camera={camera} />
                    );
                })
                }
            </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCameras: () => {
      dispatch(actions.fetchCameras());
    }
  };
}

function mapStateToProps (state) {
  return {
    cameras: state.data,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraList);