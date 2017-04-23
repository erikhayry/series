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
        receivedAt: Date.now()
    }
}

export function getSeries() {

    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    return function (dispatch) {

        // First dispatch: the app state is updated to inform
        // that the API call is starting.

        dispatch(fetchSeries());

        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.

        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.

        return fetch('https://content.viaplay.se/pc-se/serier/samtliga')
            .then(response => response.json())
            .then(json => {
                let products = json._embedded['viaplay:blocks'][0]._embedded['viaplay:products'];
                console.log(products)

                let items = products.map((item) => {
                    console.log(item)
                    return {
                        name: item.content.series.title,
                        src: item.content.images.landscape.url,
                    }
                });
                // We can dispatch many times!
                // Here, we update the app state with the results of the API call.

                dispatch(receiveSeries(items))
            });

        // In a real world app, you also want to
        // catch any error in the network call.
    }
}
