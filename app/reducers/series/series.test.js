import {GET_SERIES, RECEIVE_SERIES} from '../../actions'
import seriesReducer from './series';
import { expect } from 'chai';

describe('Series reducers', () => {

    it('should return GET_SERIES state when no previous state', () => {
        let state = seriesReducer(undefined, {
            type: GET_SERIES,
            items: []
        });

        expect(state.isFetching).to.be.true;
        expect(state.items).to.have.length(0)
    });

    it('should return GET_SERIES state with previous state', () => {
        let state = seriesReducer({
            items: ['1','2'],
            isFetching: false
        }, {
            type: GET_SERIES,
            items: ['4','5','6']
        });

        expect(state.isFetching).to.be.true;
        expect(state.items[0]).to.equal('1');
        expect(state.items).to.have.length(2);
    });

    it('should return RECEIVE_SERIES state when no previous state', () => {
        let state = seriesReducer(undefined, {
            type: RECEIVE_SERIES,
            items: [
                '1','2'
            ]
        });

        expect(state.isFetching).to.be.false;
        expect(state.items).to.have.length(2)
    })

    it('should return RECEIVE_SERIES state when previous state', () => {
        let state = seriesReducer({
            items: ['1','2'],
            isFetching: true
        }, {
            type: RECEIVE_SERIES,
            items: [
                '3','4', '5'
            ]
        });

        expect(state.isFetching).to.be.false;
        expect(state.items[0]).to.equal('3');
        expect(state.items).to.have.length(3)
    })
});
