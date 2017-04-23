import React from 'react';

export default class SeriesListItem extends React.Component {
    render() {
        return (
            <div className="m-thumbnail">
                <img src={this.props.src} alt="" className="m-thumbnail-image"/>
                <h2 className="m-thumbnail-title">{this.props.title}</h2>
            </div>
        )
    }
}

//TODO proptypes
