import * as types from '../actions/types';

const initialState = {
    data: [],
    loading: false,
    error: null,
    added: false,
    deleted: false
};

function reducer (prevState = initialState, action) {

if (action.type === types.FETCH_ONECAMERA_REQUEST) {
  const newState = Object.assign({}, prevState);
  newState.loading = true;
  newState.added = false;
  newState.deleted = false;
  return newState;
}

if (action.type === types.FETCH_ONECAMERA_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.data = action.data;
    newState.loading = false;
    newState.added = false;
    console.log(newState);
    return newState;
}

if (action.type === types.FETCH_ONECAMERA_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.loading = false;
    newState.data = [];
    newState.added = false;
    return newState;
}

if (action.type === types.ADD_CAMERA_REQUEST) {
  const newState = Object.assign({}, prevState);
  newState.loading = true;
  newState.deleted = false;
  newState.added = false;
  return newState;
}

if (action.type === types.ADD_CAMERA_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.data = [...newState.data, action.data];
    newState.loading = false;
    newState.added = true;
    return newState;
}

if (action.type === types.ADD_CAMERA_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.loading = false;
    newState.data = [];
    newState.added = false;
    return newState;
}


if (action.type === types.DELETE_CAMERA_REQUEST) {
  const newState = Object.assign({}, prevState);
  newState.loading = true;
  newState.added = false;
  newState.deleted = false;
  return newState;
}

if (action.type === types.DELETE_CAMERA_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.data = [...newState.data, action.data];
    newState.loading = false;
    newState.deleted = true;
    return newState;
}

if (action.type === types.DELETE_CAMERA_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.loading = false;
    newState.data = [];
    newState.added = false;
    newState.deleted = false;
    return newState;
}

else {
return prevState;
}

}

export default reducer;