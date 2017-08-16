import React, { Component } from 'react';
import './OneCamera.css';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';

class OneCamera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gotData: false,
            noData: false
        };
    }
    componentWillReceiveProps(newProps) {
        console.log('received')
        if (!this.state.gotData) {
            this.setState({gotData: true});
        }
        else if (newProps.camera.megapixels === undefined) {
            console.log(this.props.camera);
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
               {
                (this.props.loading)
                        ?
                        <p>Loading</p>
                :
                        <div>
                    <h1>{this.props.camera.make}</h1>
                    <h3>{this.props.camera.model}</h3>
                    <p>{`megapixels: ${this.props.camera.megapixels}`}</p>
                </div>
                }
                <Link to='/cameras'><button className="cameraPageButton">Return to Cameras</button></Link>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        camera: state.onecamera.data,
        loading: state.onecamera.loading
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