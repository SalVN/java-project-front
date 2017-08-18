import React, { Component } from 'react';
import './OneCamera.css';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import ReactLoading from 'react-loading';

class OneCamera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gotData: false,
            noData: false,
            deleted: false
        };
        this.deleteHandler = this.deleteHandler.bind(this);
    }
    componentWillReceiveProps(newProps) {
        if (!this.state.gotData) {
            this.setState({gotData: true});
        }
        if (newProps.deleted) {
            this.setState({deleted: true});
        } else if (newProps.camera.megapixels === undefined) {
            this.setState({ noData: true });
        }
    }
    componentDidMount() {
        this.props.fetchOneCamera(this.props.match.params.cameraId);
    }
    render() {
        return (
            <div>
                {this.state.noData &&
                    <Redirect to='/404'/>
                }
                {this.state.deleted && 
                    <Redirect to='/cameras'/>
                }
               {
                (this.props.loading)
                        ?
                        <ReactLoading type='bubbles'/>
                :
                        <div>
                    <h1>{this.props.camera.make}</h1>
                    <h3>{this.props.camera.model}</h3>
                    <p>{`megapixels: ${this.props.camera.megapixels}`}</p>
                </div>
                }
                <Link to='/cameras'><button className="cameraPageButton">Return to Cameras</button></Link>
                <button className="cameraPageDeleteButton" onClick={this.deleteHandler}>Delete Camera</button>

            </div>
        );
    }
    deleteHandler () {
        this.props.deleteCamera(this.props.match.params.cameraId);
    }
}

function mapStateToProps(state) {
    return {
        camera: state.onecamera.data,
        loading: state.onecamera.loading,
        deleted: state.onecamera.deleted
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchOneCamera: (id) => {
            dispatch(actions.fetchOneCamera(id));
        },
        deleteCamera: (id) => {
            dispatch(actions.deleteCamera(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OneCamera);