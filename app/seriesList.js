import React from 'react';
import SeriesListItem from './seriesListItem'
import request from './api'

export default class SeriesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: []
        };
    }
    componentDidMount() {
        //TODO move out request
        //TODO state ok?
        request().then(series => this.setState({series}))
    }
    render() {
        let listItems = [];
        this.state.series.forEach((item, index) => {
            listItems.push(<SeriesListItem key={index} title={item.content.series.title} />)
        });

        return (
            <div>
              <h1>SeriesList</h1>
              <ul>
                  {listItems}
              </ul>
            </div>
        )
    }
}
