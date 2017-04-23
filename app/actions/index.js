import fetch from 'isomorphic-fetch'

export const GET_SERIES = 'GET_SERIES';

function fetchSeries(){
    return {
        type: GET_SERIES
    }
}

export const RECEIVE_SERIES = 'RECEIVE_SERIES';

function receiveSeries(items) {
    return {
        type: RECEIVE_SERIES,
        items: items,
    }
}

export function getSeries(size = 10) {
    return function (dispatch) {
        dispatch(fetchSeries());

        //TODO url in config
        return fetch('https://content.viaplay.se/pc-se/serier/samtliga')
            .then(response => response.json())
            .then(json => {
                //TODO safe object
                let products = json._embedded['viaplay:blocks'][0]._embedded['viaplay:products'];
                let items = products.map((item) => {
                    return {
                        name: item.content.series.title,
                        src: item.content.images.landscape.url,
                    }
                });
                setTimeout(() => {
                    dispatch(receiveSeries(items.slice(0, size)))

                }, 5000);


            });
        //TODO handle error
    }
}
