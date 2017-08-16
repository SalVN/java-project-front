import {combineReducers} from 'redux';
import camerasReducer from './cameras.reducer.js';
// import addCommentReducer from './comments.reducer.js';

export default combineReducers({
    cameras: camerasReducer,
});