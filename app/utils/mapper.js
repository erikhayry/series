const isObject = obj => obj && typeof obj === 'object';
const hasKey = (obj, key) => key in obj;

const MissingProperty = new Proxy({}, {
    get: function(target, name){
        let u = MissingProperty;
        u.key = name;
        return u;
    }
});

const either = (val) => (val === MissingProperty ? [] : val);

function safe(obj) {
    return new Proxy(obj, {
        get: function(target, name){
            return hasKey(target, name) ?
                (isObject(target[name]) ? safe(target[name]) : target[name]) : MissingProperty;
        }
    });
}

function getProducts(json) {
    return json._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
}

function mapper(json){
    let products = either(getProducts(safe(json)));
    return products.map((item) => {
        return {
            title: item.content.series.title, //TODO handle missing val
            src: item.content.images.landscape.url === MissingProperty ? undefined : item.content.images.landscape.url ,
        }
    });
}

export default mapper
