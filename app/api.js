//TODO rename
export default function request() {
    return new Promise(resolve => {
        fetch('https://content.viaplay.se/pc-se/serier/samtliga')
            .then((response) => response.json())
            .then((responseJson) => {
                //TODO functional?
                resolve(responseJson._embedded['viaplay:blocks'][0]._embedded['viaplay:products'])
            })
            .catch((error) => {
                //TODO handle error
                console.error(error);
            });
    });
}
