import axios from 'axios';

import * as types from './types';

const API_URL = 'http://localhost:6060';

export function fetchCameras () {
    return function (dispatch) {
        dispatch(fetchCamerasRequest());
        axios.get(`${API_URL}/cameras`)
        .then(res => {
            dispatch(fetchCamerasSuccess(res.data));
        })
        .catch(err => {
            dispatch(fetchCamerasError(err));
        });
    };
}

export function fetchCamerasRequest () {
    return {
        type: types.FETCH_CAMERAS_REQUEST
    };
}

export function fetchCamerasSuccess (cameras) {
    return {
        type: types.FETCH_CAMERAS_SUCCESS,
        data: cameras
    };
}

export function fetchCamerasError (err) {
    return {
        type: types.FETCH_CAMERAS_ERROR,
        data: err
    };
}