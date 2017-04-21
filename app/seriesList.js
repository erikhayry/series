import React from 'react';
import SeriesListItem from './seriesListItem'
import request from './api'

export default class SeriesList extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            series: []
        };
    }
    componentDidMount() {
        console.log('componentDidMount');
        //TODO move out request
        //TODO state ok?
        request().then(series => this.setState({series}))
    }
    render() {
        console.log('render');
        let listItems = [];
        this.state.series.forEach((item, index) => {
            //TODO safe object
            listItems.push(<li key={index} className="m-series-list-item"><SeriesListItem title={item.content.series.title} src={item.content.images.landscape.url}/></li>)
        });

        return (
            <div>
              <ul className="m-series-list">
                  {listItems}
              </ul>
            </div>
        )
    }
}
