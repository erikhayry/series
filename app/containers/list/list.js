import { connect } from 'react-redux'
import React, { Component } from 'react'
import { PropTypes }from 'prop-types'
import { getSeries } from '../../actions'
import SeriesList from '../../components/series-list/series-list'
import SeriesLoader from '../../components/series-loader/series-loader'

class List extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getSeries()
    }

    render(){
        return (
            <div>
                <SeriesLoader
                    isLoading={this.props.isFetching}
                />
                <SeriesList
                    series={this.props.items}
                    isLoading={this.props.isFetching}
                    getSeries={this.props.getSeries}
                />
            </div>
        )
    }
}

List.propTypes = {
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    getSeries: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { series } = state;

    const {
        items,
        isFetching
    } = series.items && series.items.length > 0 ? series : {
        items: [],
        isFetching: true
    };

    return {
        items,
        isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSeries: () => dispatch(getSeries()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List)
