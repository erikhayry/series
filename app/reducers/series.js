import {GET_SERIES, RECEIVE_SERIES} from '../actions'

function series(state = {
    isFetching: false,
    items: []
}, action){
    switch (action.type) {
        case GET_SERIES:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_SERIES:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.items,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}


function rootReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_SERIES:
        case GET_SERIES:
            return Object.assign({}, state, series(state, action));
        default:
            return state
    }
}

export default rootReducer;
