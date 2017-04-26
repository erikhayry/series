import React from 'react';
import {shallow} from 'enzyme';
import SeriesLoader from './series-loader';
import { expect } from 'chai';

test('SeriesListItem add active state class', () => {
    const seriesLoader = shallow(
        <SeriesLoader isLoading={true} />
    );

    expect(seriesLoader.find('.is-loading')).to.have.length(1);
});

test('SeriesListItem not add active state class', () => {
    const seriesLoader = shallow(
        <SeriesLoader isLoading={false} />
    );

    expect(seriesLoader.find('.is-loading')).to.have.length(0);
});

