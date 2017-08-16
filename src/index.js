import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import './components/index.css';
import App from './components/App';
import reducer from './reducer/reducer';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));