import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import CameraBox from './CameraBox';

// const cameras = [
//     { cameraId: 1, megapixels: 24, make: 'Sony', model: 'A9' },
//     { cameraId: 2, megapixels: 16, make: 'Nikon', model: 'Coolpix P900' },
//     { cameraId: 3, megapixels: 30, make: 'Canon', model: 'EO5 5D Mark IV' },
//     { cameraId: 4, megapixels: 18, make: 'Panasonic', model: 'Lumix DMC-TZ60 ' },
//     { cameraId: 5, megapixels: 36, make: 'Nikon', model: 'D810' }
// ];

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