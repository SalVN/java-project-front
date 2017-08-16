import * as types from '../actions/types';

const initialState = {
    data: [],
    loading: false,
    error: null
};

function reducer (prevState = initialState, action) {

if (action.type === types.FETCH_ONECAMERA_REQUEST) {
  const newState = Object.assign({}, prevState);
  newState.loading = true;
  return newState;
}

if (action.type === types.FETCH_ONECAMERA_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.data = action.data;
    newState.loading = false;
    return newState;
}

if (action.type === types.FETCH_ONECAMERA_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.data;
    newState.loading = false;
    newState.data = [];
    return newState;
}

else {
return prevState;
}

}

export default reducer;