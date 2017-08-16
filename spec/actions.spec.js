import { expect } from 'chai';
import * as types from '../src/actions/types';
import * as actions from '../src/actions/actions';

describe('ACTIONS', () => {
    describe('FETCH_CAMERAS_REQUEST', () => {
        it('returns the expected action', () => {
            expect(actions.fetchCamerasRequest()).to.eql({
                type: types.FETCH_CAMERAS_REQUEST
            });
        });
    });

    describe('FETCH_CAMERAS_SUCCESS', () => {
        it('returns the expected action', () => {
            expect(actions.fetchCamerasSuccess(['cameras'])).to.eql({
                type: types.FETCH_CAMERAS_SUCCESS,
                data: ['cameras']
            });
        });
    });

    describe('FETCH_CAMERAS_ERROR', () => {
        it('returns the expected action', () => {
            expect(actions.fetchCamerasError('err')).to.eql({
                type: types.FETCH_CAMERAS_ERROR,
                data: 'err'
            });
        });
    });

});
