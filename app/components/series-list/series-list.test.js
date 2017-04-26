import React from 'react';
import {mount} from 'enzyme';
import { expect } from 'chai';

import SeriesList from './series-list';
import SeriesListItem from '../series-thumbnail/series-list-item';

test('SeriesList should render', () => {
    const seriesList = mount(
        <SeriesList
            series={[
                {
                    'name': 'name 1',
                    'src': 'src 1'
                },
                {
                    'name': 'name 2',
                    'src': 'src 2'
                },
                {
                    'name': 'name 3',
                    'src': 'src 3'
                },
            ]}
            isFetching={false}
        />
    );

    expect(seriesList.find(SeriesListItem)).to.have.length(3);
});
