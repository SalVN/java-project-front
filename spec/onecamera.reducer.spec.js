import * as actions from '../src/actions/actions';
import reducer from '../src/reducer/onecamera.reducer';
import { expect } from 'chai';

const initialState = {
    data: [],
    loading: false,
    error: null
};

describe('reducer', () => {
    describe('#reducer', () => {
        it('is a function', () => {
            expect(reducer).to.be.a('function');
        });
    });
    describe('#action: FETCH_ONECAMERA_REQUEST', () => {
        it('should set loading to true', () => {
            const action = actions.fetchOneCameraRequest();
            const newState = reducer(initialState, action);
            expect(newState.loading).to.be.true;
            expect(newState).to.not.equal(initialState);
        });
    });
    describe('#action: FETCH_ONECAMERA_SUCCESS', () => {
        it('should update the reducer, but not change the initial state', () => {
            const data = { camera: 'camera' };
            const action = actions.fetchOneCameraSuccess(data);
            const newState = reducer(initialState, action);
            expect(newState.loading).to.be.false;
            expect(newState.data).to.eql(data);
            expect(newState.data).to.not.equal(initialState.data);
            expect(newState).to.not.equal(initialState);
        });
    });
    describe('#action: FETCH_ONECAMERA_ERROR', () => {
        it('should update the reducer, but not change the initial state', () => {
            const error = {error: 'error'};
            const action = actions.fetchOneCameraError(error);
            const newState = reducer(initialState, action);
            expect(newState.loading).to.be.false;
            expect(newState.error).to.eql(error);
            expect(initialState.error).to.not.equal(error);
            expect(newState.data).to.eql([]);
            expect(newState).to.not.equal(initialState);
            expect (newState.error).to.not.equal(initialState.error);
        });
    });
});