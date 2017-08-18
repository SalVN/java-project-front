import axios from 'axios';

import * as types from './types';

const API_URL = 'http://localhost:6060';

export function fetchCameras () {
    return function (dispatch) {
        dispatch(fetchCamerasRequest());
        axios.get(`${API_URL}/cameras`)
        .then(res => {
            console.log(res);
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

export function fetchOneCamera (id) {
    return function (dispatch) {
        dispatch(fetchOneCameraRequest());
        axios.get(`${API_URL}/cameras/${id}`)
        .then(res => {
            dispatch(fetchOneCameraSuccess(res.data));
        })
        .catch(err => {
            dispatch(fetchOneCameraError(err));
        });
    };
}

export function fetchOneCameraRequest () {
    return {
        type: types.FETCH_ONECAMERA_REQUEST
    };
}

export function fetchOneCameraSuccess (camera) {
    return {
        type: types.FETCH_ONECAMERA_SUCCESS,
        data: camera
    };
}

export function fetchOneCameraError (err) {
    return {
        type: types.FETCH_ONECAMERA_ERROR,
        data: err
    };
}

export function addCamera (data) {
    return function (dispatch) {
        dispatch(addCameraRequest());
        const url = `${API_URL}/cameras/-1`;
        axios.post(url, data)
        .then(res => {
            dispatch(addCameraSuccess(res.data));
        })
        .catch(err => {
            dispatch(addCameraError(err));
        });
    };
}

export function addCameraRequest () {
    return {
        type: types.ADD_CAMERA_REQUEST
    };
}

export function addCameraSuccess (camera) {
    return {
        type: types.ADD_CAMERA_SUCCESS,
        data: camera
    };
}

export function addCameraError (error) {
    return {
        type: types.ADD_CAMERA_ERROR,
        data: error
    };
}

export function deleteCamera (id) {
    return function (dispatch) {
        dispatch(deleteCameraRequest());
        const url = `${API_URL}/cameras/${id}`;
        axios.delete(url)
        .then(res => {
            console.log(res.data);
            dispatch(deleteCameraSuccess(res.data));
        })
        .catch(err => {
            dispatch(deleteCameraError(err));
        });
    };
}

export function deleteCameraRequest () {
    return {
        type: types.DELETE_CAMERA_REQUEST
    };
}

export function deleteCameraSuccess (res) {
    return {
        type: types.DELETE_CAMERA_SUCCESS,
        data: res
    };
}

export function deleteCameraError (error) {
    return {
        type: types.DELETE_CAMERA_ERROR,
        data: error
    };
}