import fetchSeries from '../utils/api'
import mapper from '../utils/mapper';
import mock from '../utils/mock';

export const GET_SERIES = 'GET_SERIES';

function fetchSeriesAction(){
    return {
        type: GET_SERIES
    }
}

export const RECEIVE_SERIES = 'RECEIVE_SERIES';

function receiveSeriesAction(items) {
    return {
        type: RECEIVE_SERIES,
        items: items,
    }
}

export function getSeries() {
    return function (dispatch) {
        dispatch(fetchSeriesAction());

        return fetchSeries()
            .then(items => mapper(items))
            .then(mock)
            .then(items => {
                dispatch(receiveSeriesAction(items))
            })
    }
}
