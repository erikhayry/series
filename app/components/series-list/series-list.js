import React from 'react'
import PropTypes from 'prop-types'
import SeriesListItem from '../series-list-item/series-list-item'
import { getSeries } from '../../actions'

const SeriesList = ({ series, isFetching, dispatch}) => {

    const handleRefreshClick = (e) => {
        e.preventDefault();
        console.log('click');
        dispatch(getSeries(3))
    };

    return (
        <div>
            {isFetching && series.length === 0 &&
                <h2>Loading...</h2>
            }
            {series.length > 0 &&
                <ul className="m-series-list">
                    {series.map((item, index) =>
                        <li key={index} className="m-series-list-item">
                            <SeriesListItem title={item.name} src={item.src}/>
                        </li>
                    )}
                </ul>
            }
            {!isFetching &&
            <a href='#'
               onClick={handleRefreshClick}>
                Refresh
            </a>
            }
        </div>
    )
};

SeriesList.propTypes = {
    series: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired
    }).isRequired).isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func //TODO ok?
};

export default SeriesList
