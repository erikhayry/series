import { connect } from 'react-redux'
import React, { Component } from 'react'
import { PropTypes }from 'prop-types'
import { getSeries } from '../../actions'
import SeriesList from '../../components/series-list/series-list'


class Series extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('componentDidMount')
        const { dispatch } = this.props;
        dispatch(getSeries())
    }

    render(){
        return (
            <div>
                <SeriesList
                    series={this.props.items}
                    isFetching={this.props.isFetching}
                    dispatch={this.props.dispatch}
                />
            </div>
        )
    }
}

Series.propTypes = {
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    //TODO correct?
    const { series } = state;

    const {
        items,
        isFetching
    } = series.items ? series : {
        items: [],
        isFetching: true
    };

    return {
        items,
        isFetching
    }
}

export default connect(mapStateToProps)(Series)

