import {GET_SERIES, RECEIVE_SERIES} from '../../actions'
import rootReducer from './series';

//TODO add tests
describe('Series reducers', () => {

    it('should return GET_SERIES state', () => {
        let state = rootReducer({}, {type: GET_SERIES});

        expect(state.isFetching).toBeTruthy();
        expect(state.items.length).toEqual(0)
    });

    it('should return RECEIVE_SERIES state', () => {
        let state = rootReducer({}, {
            type: RECEIVE_SERIES,
            items: [
                1,2,3,4,5
            ]
        });

        expect(state.isFetching).toBeFalsy();
        expect(state.items.length).toEqual(5)
    })
});
