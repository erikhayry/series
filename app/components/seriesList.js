/*
import React from 'react';
import request from './../api'

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
        //request().then(series => this.setState({series}))
    }
    render() {
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
*/

import React from 'react'
import PropTypes from 'prop-types'
import SeriesListItem from './seriesListItem'

const SeriesList = ({ series }) => {
    console.log('SeriesList', series)
    return (
        <ul className="m-series-list">
            {series.map((item, index) =>
                <li key={index} className="m-series-list-item"><SeriesListItem title={item.name} src={item.src}/></li>
            )}
        </ul>
    )
};

SeriesList.propTypes = {
    series: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired
    }).isRequired).isRequired
};

export default SeriesList
