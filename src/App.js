import React, { Component } from 'react';
import CameraList from './CameraList';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CameraList />
      </div>
    );
  }
}

export default App;
