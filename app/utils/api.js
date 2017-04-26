import fetch from 'isomorphic-fetch'
import { config }from '../config';

function fetchSeries() {
    return fetch(config.api)
        .then(response => response.json())
        .catch((error) => {
            //TODO handle error
            console.error(error);
        });
}

export default fetchSeries
