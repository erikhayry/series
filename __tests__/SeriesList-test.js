import React from 'react';
import {shallow} from 'enzyme';
import SeriesList from '../app/seriesList';

test('SeriesList should render', () => {
    const seriesList = shallow(
        <SeriesList  />
    );

    expect(seriesList.text()).toEqual('SeriesList');
});
