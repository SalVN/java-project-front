 import React, { Component } from 'react';
import './AddCamera.css';
import axios from 'axios';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';


class AddCamera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div>
            {
                this.state.submitted &&
                <Redirect to='/cameras'/>
            }
                <h2>Add A Camera</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="make">Make: </label>
                    <input id="make"/>
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
    handleSubmit (e) {
        e.preventDefault();
        const newCamera = {};
        newCamera.make = e.target[0].value;
        newCamera.model = e.target[1].value;
        newCamera.megapixels = e.target[2].value;
        // axios.post(`${API_URL}/cameras/-1`, newCamera)
        // .then(() => {
        //     this.setState({
        //         submitted: true
        //     });
        // })
        // .catch(err => {
        //     console.log('err', err);
        // });
        console.log(newCamera);

    }
}

export default AddCamera;