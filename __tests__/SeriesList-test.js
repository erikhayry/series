import React from 'react';
import {mount} from 'enzyme';
import { expect } from 'chai';

import SeriesList from '../app/seriesList';
import SeriesListItem from '../app/seriesListItem';

jest.mock('../app/api');

test('SeriesList should render', (done) => {
    const seriesList = mount(
        <SeriesList  />
    );

    //TODO refactor
    setTimeout(() => {
        try {
            expect(seriesList.find(SeriesListItem)).to.have.length(3);
            done();
        } catch (error) {
            done.fail(error);
        }
    });
});
