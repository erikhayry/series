import {GET_SERIES, RECEIVE_SERIES} from '../../actions'

function series(state = {
    isFetching: false,
    items: []
}, action){
    console.log('series', state, action)
    switch (action.type) {
        case GET_SERIES:
            return Object.assign({}, state, {
                isFetching: true,
                items: []
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


//TODO why both rootReducer and series method
function rootReducer(state = {}, action) {
    console.log('rootReducer', state, action)
    switch (action.type) {
        case RECEIVE_SERIES:
        case GET_SERIES:
            return Object.assign({}, state, series(state, action));
        default:
            return state
    }
}

export default rootReducer;
