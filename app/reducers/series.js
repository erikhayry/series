function series(state = [], action) {
    switch (action.type) {
        case 'GET_SERIES':
            return [{
                name: 'name',
                src: 'url'
            }];
        default:
            return state;
    }
}

export default series;
