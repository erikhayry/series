import React from 'react';
import {shallow} from 'enzyme';
import SeriesListItem from './series-list-item';

test('SeriesListItem should render', () => {
    const seriesList = shallow(
        <SeriesListItem title="A Title" />
    );

    expect(seriesList.text()).toEqual('A Title');
});
