import React from 'react'
import { PropTypes }from 'prop-types'

const SeriesLoader = ({ isLoading }) => {
    let classNameState = isLoading ? 'is-loading' : '';
    return (
        <div className={"series-loader " + classNameState}>Loading</div>
    )
};

SeriesLoader.propTypes = {
    isLoading: PropTypes.bool.isRequired
};

export default SeriesLoader
