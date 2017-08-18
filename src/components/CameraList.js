import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import CameraBox from './CameraBox';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import './CameraList.css';

class CameraList extends Component {

    componentDidMount() {
        this.props.fetchCameras();
    }
    render() {
        return (
            <div>
                {
                    this.props.loading &&
                    <div className='loading'>
                        <ReactLoading className='loading' alt='loading' type='bubbles' color='#444' />
                    </div>
                }
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
                        :
                        <div className='loading'>
                            <ReactLoading className='loading' alt='loading' type='bubbles' color='#444' />
                        </div>
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
        loading: state.cameras.loading
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraList);