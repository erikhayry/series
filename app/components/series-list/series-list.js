import React from 'react'
import PropTypes from 'prop-types'
import SeriesThumbnail from '../series-thumbnail/series-thumbnail'

const SeriesList = ({ series, isLoading, getSeries}) => {
    let classNameState = isLoading ? 'is-loading' : '';

    return (
        <div>
            {series.length > 0 &&
                <ul className={"series-list " +  classNameState}>
                    {series.map((item, index) =>
                        <li key={index} className="series-list-item">
                            <SeriesThumbnail title={item.title} src={item.src}/>
                        </li>
                    )}
                </ul>
            }
            {!isLoading &&
            <button className="btn"
               onClick={getSeries}>
                Refresh
            </button>
            }
        </div>
    )
};

//TODO name and src spec here or in SeriesThumbnail
SeriesList.propTypes = {
    series: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        src: PropTypes.string
    }).isRequired).isRequired,
    isLoading: PropTypes.bool.isRequired,
    getSeries: PropTypes.func.isRequired
};

export default SeriesList
