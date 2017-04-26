import React from 'react';
import {mount} from 'enzyme';
import { expect } from 'chai';

import SeriesList from './series-list';
import SeriesThumbnail from '../series-thumbnail/series-thumbnail';

test('SeriesList should render', () => {
    const seriesList = mount(
        <SeriesList
            series={[
                {
                    'title': 'title 1',
                    'src': 'src 1'
                },
                {
                    'title': 'title 2',
                    'src': 'src 2'
                },
                {
                    'title': 'title 3',
                    'src': 'src 3'
                },
            ]}
            isLoading={false}
            getSeries={function(){}}
        />
    );

    expect(seriesList.find(SeriesThumbnail)).to.have.length(3);
});
