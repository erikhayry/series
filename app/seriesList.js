import React from 'react';
import SeriesListItem from './seriesListItem'

export default class SeriesList extends React.Component {
  render() {
    let listItems = [];
    [1,2,3].forEach((item, index) => {
        listItems.push(<SeriesListItem key={index} title={item} />)
    });
    return (
        <div>
          <h1>SeriesList</h1>
          <ul>
              {listItems}
          </ul>
        </div>
    )
  }
}
