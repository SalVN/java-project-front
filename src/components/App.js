import React, { Component } from 'react';
import CameraList from './CameraList';
import Header from './Header';
import OneCamera from './OneCamera';
import AddCamera from './AddCamera';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={CameraList} />
            <Route exact path='/cameras' component={CameraList} />
            <Route path='/cameras/add' component={AddCamera} />
            <Route path='/cameras/:cameraId' component={OneCamera} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
