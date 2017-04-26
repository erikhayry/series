import React from 'react';
import {shallow} from 'enzyme';
import SeriesThumbnail from './series-thumbnail';

test('SeriesListItem should render', () => {
    const seriesList = shallow(
        <SeriesThumbnail title="A Title" />
    );

    expect(seriesList.text()).toEqual('A Title');
});
