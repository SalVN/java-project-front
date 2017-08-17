import React, { Component } from 'react';
import './AddCamera.css';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { every } from 'underscore';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';

function validate(state) {
    const errors = {};
    // test make
    errors.make = (state.make.touched && state.make.value.length < 1) ? 'Please enter a camera make' : '';
    // test model
    errors.model = (state.model.touched && state.model.value.length < 1) ? 'Please enter a camera make' : '';
    // test megapixels
    if (state.megapixels.touched && state.megapixels.value.length < 1) errors.megapixels = 'Please enter the number of megapixels';
    else if (state.megapixels.value.length > 0 && (/\D/g).test(state.megapixels.value)) errors.megapixels = 'Please enter only numbers';
    else errors.megapixels = '';


    return errors;
}

class AddCamera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            added: false,
            make: {
                value: '',
                touched: false
            },
            model: {
                value: '',
                touched: false
            },
            megapixels: {
                value: '',
                touched: false
            },
            errors: {
                make: '',
                model: '',
                megapixels: ''
            },
            invalidEntries: false,
            serverMessage: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeMake = this.handleChangeMake.bind(this);
        this.handleChangeModel = this.handleChangeModel.bind(this);
        this.handleChangeMegapixels = this.handleChangeMegapixels.bind(this);
    }
    componentWillReceiveProps(newProps) {
        if (newProps.error) {
            this.setState({invalidEntries: true, serverMessage: newProps.error.response.data.errors[0].defaultMessage });
        }
        if (this.props.added) this.setState({ added: true });
    }
    render() {
        let makeValidation = this.state.errors.make ? 'input-errors' : '';
        let modelValidation = this.state.errors.model ? 'input-errors' : '';
        let megapixelsValidation = this.state.errors.megapixels ? 'input-errors' : '';
        return (
            <div>
                {this.state.invalidEntries &&
                    <div>
                        <h3 className="validation">Unable to submit form</h3>
                        <p className="validation">{this.state.serverMessage}</p>
                    </div>

                }
                {
                    this.props.added &&
                    <Redirect to='/cameras' />
                }
                <h2>Add A Camera</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="make">Make: </label>
                    <br />
                    <input onChange={this.handleChangeMake} className={`cameraAddField ${makeValidation}`} id="make" placeholder="Camera Make" />
                    <p className='validation'>{this.state.errors.make}</p>
                    <br />
                    <label htmlFor="cameraModel">Model: </label>
                    <br />
                    <input onChange={this.handleChangeModel} className={`cameraAddField ${modelValidation}`} id="cameraModel" placeholder="Camera Model" />
                    <p className='validation'>{this.state.errors.model}</p>
                    <br />
                    <label htmlFor="megapixels">Megapixels: </label>
                    <br />
                    <input onChange={this.handleChangeMegapixels} className={`cameraAddField ${megapixelsValidation}`} id="megapixels" placeholder="Megapixels" />
                    <p className='validation'>{this.state.errors.megapixels}</p>
                    <br />
                    <button className="cameraAddButton" type="submit">Submit</button>
                    <Link to="/cameras"><button className="cameraReturnButton" type="submit">Return to Cameras</button></Link>

                </form>
            </div>
        );
    }
    handleSubmit(e) {
        e.preventDefault();
        if (every(this.state.errors, field => field.length === 0)) {
            const newCamera = {};
            newCamera.make = e.target[0].value;
            newCamera.model = e.target[1].value;
            newCamera.megapixels = e.target[2].value;
            this.props.addCamera(newCamera);

        } else {
            this.setState({ invalidEntries: true });
        }

    }
    handleChangeMake(e) {
        e.preventDefault();
        const newState = Object.assign({}, this.state);
        newState.make.value = e.target.value;
        newState.make.touched = true;
        const errors = validate(newState);
        this.setState(Object.assign(newState, { errors }));
    }
    handleChangeModel(e) {
        e.preventDefault();
        const newState = Object.assign({}, this.state);
        newState.model.value = e.target.value;
        newState.model.touched = true;
        newState.make.touched = true;
        const errors = validate(newState);
        this.setState(Object.assign(newState, { errors }));
    }

    handleChangeMegapixels(e) {
        e.preventDefault();
        const newState = Object.assign({}, this.state);
        newState.megapixels.value = e.target.value;
        newState.megapixels.touched = true;
        newState.make.touched = true;
        newState.model.touched = true;
        const errors = validate(newState);
        this.setState(Object.assign(newState, { errors }));
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
        added: state.onecamera.added,
        error: state.onecamera.error
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCamera);
