import React from 'react'
import PropTypes from 'prop-types'

const SeriesThumbnail = ({ title, src }) => {
    return (
        <div className="series-thumbnail">
            {src &&
                <img src={src} alt="" className="series-thumbnail-image"/>
            }
            {!src &&
                <div className="series-thumbnail-placeholder">
                    <div className="series-thumbnail-placeholder-title">
                        {title}
                    </div>
                </div>
            }
        </div>
    )
};

SeriesThumbnail.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string
};

export default SeriesThumbnail
