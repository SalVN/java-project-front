import React, { Component } from 'react';
import './AddCamera.css';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';


class AddCamera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            added: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillReceiveProps () {
        if (this.props.added) this.setState({added: true});
    }
    render() {
        return (
            <div>
                {
                    this.props.added &&
                    <Redirect to='/cameras' />
                }
                <h2>Add A Camera</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="make">Make: </label>
                    <input id="make" />
                    <br />
                    <label htmlFor="cameraModel">Model: </label>
                    <input id="cameraModel" />
                    <br />
                    <label htmlFor="megapixels">Megapixels: </label>
                    <input id="megapixels" />
                    <br />
                    <button className="cameraAddButton" type="submit">Submit</button>
                    <Link to="/cameras"><button className="cameraReturnButton" type="submit">Return to Cameras</button></Link>

                </form>
            </div>
        );
    }
    handleSubmit(e) {
        e.preventDefault();
        const newCamera = {};
        newCamera.make = e.target[0].value;
        newCamera.model = e.target[1].value;
        newCamera.megapixels = e.target[2].value;
        console.log(newCamera);
        this.props.addCamera(newCamera);
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addCamera: (camera) => {
            dispatch(actions.addCamera(camera));
        }
    };
}

function mapStateToProps(state) {
    return {
        loading: state.onecamera.added,
        added: state.onecamera.added
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCamera);
