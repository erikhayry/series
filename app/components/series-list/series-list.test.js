import React from 'react';
import {mount} from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import SeriesList from './series-list';
import SeriesThumbnail from '../series-thumbnail/series-thumbnail';

describe('SeriesThumbnail', () => {
    const data = [
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
    ];


    it('should render a list', () => {
        const seriesList = mount(
            <SeriesList
                series={data}
                isLoading={false}
                getSeries={function(){}}
            />
        );

        expect(seriesList.find(SeriesThumbnail)).to.have.length(3);
        expect(seriesList.find('.is-loading')).to.have.length(0);
        expect(seriesList.find('.btn')).to.have.length(1);
    });

    it('should render a list with loading state', () => {
        const seriesList = mount(
            <SeriesList
                series={data}
                isLoading={true}
                getSeries={function(){}}
            />
        );

        expect(seriesList.find(SeriesThumbnail)).to.have.length(3);
        expect(seriesList.find('.is-loading')).to.have.length(1);
        expect(seriesList.find('.btn')).to.have.length(0);
    });

    it('should handle reload button action', () => {
        const onFetchSeries = sinon.spy();

        const seriesList = mount(
            <SeriesList
                series={data}
                isLoading={false}
                getSeries={onFetchSeries}
            />
        );

        seriesList.find('.btn').simulate('click');
        expect(onFetchSeries).to.have.property('callCount', 1);
    });
});



