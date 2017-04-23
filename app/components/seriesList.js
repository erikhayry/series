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
