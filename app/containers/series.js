import { connect } from 'react-redux'
import React, { Component } from 'react'
import { PropTypes }from 'prop-types'
import { getSeries } from '../actions'
import SeriesList from '../components/SeriesList'


class Series extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getSeries())
    }

    render(){
        console.log('render', this.props)

        return (
            <div>
                <SeriesList series={this.props.items} />
            </div>
        )
    }
}

Series.propTypes = {
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    console.log('mapStateToProps')
    console.log(state.series)

    const series = state.series;

    return {
        items: series.items || [],
        isFetching: series.isFetching || false,
        lastUpdated: series.lastUpdated
    }
}

export default connect(mapStateToProps)(Series)

