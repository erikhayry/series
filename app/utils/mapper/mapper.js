const isObject = obj => obj && typeof obj === 'object';
const hasKey = (obj, key) => key in obj;

const MissingProperty = new Proxy({}, {
    get: (target, name) => MissingProperty
});

const resolve = (val) => (val === MissingProperty ? [] : val);

function safe(obj) {
    return new Proxy(obj, {
        get: (target, name) => {
            return hasKey(target, name) ?
                (isObject(target[name]) ? safe(target[name]) : target[name]) : MissingProperty;
        }
    });
}

function getProducts(json) {
    return json._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
}

function mapper(json){
    let products = resolve(getProducts(safe(json)));
    return products
        .filter(item => item.content.series.title !== MissingProperty)
        .map(item => {
            let seriesItem = {
                title: item.content.series.title,
            };

            if(item.content.images.landscape.url !== MissingProperty){
                seriesItem.src =  item.content.images.landscape.url
            }
        return seriesItem;
    });
}

export default mapper
