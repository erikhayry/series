import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import SeriesList from '../app/seriesList';
import SeriesListItem from '../app/seriesListItem';

test('SeriesList should render', () => {
    const seriesList = shallow(
        <SeriesList  />
    );

    expect(seriesList.find('h1').text()).to.equal('SeriesList');
    expect(seriesList.find(SeriesListItem)).to.have.length(3);
});
