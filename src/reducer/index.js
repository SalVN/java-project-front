import {combineReducers} from 'redux';
import camerasReducer from './cameras.reducer.js';
import onecameraReducer from './onecamera.reducer.js';

export default combineReducers({
    cameras: camerasReducer,
    onecamera: onecameraReducer
});