import {GET_SERIES, RECEIVE_SERIES} from '../../actions'

function seriesReducer(state = {
    isFetching: false,
    items: []
}, action){
    switch (action.type) {
        case GET_SERIES:
            return Object.assign({}, state, {
                isFetching: true,
                items: state.items
            });
        case RECEIVE_SERIES:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.items,
            });
        default:
            return state;
    }
}

export default seriesReducer;
