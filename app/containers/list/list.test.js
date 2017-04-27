import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { storeFake } from '../../__mocks__/store';
import List from './list';
import SeriesList from '../../components/series-list/series-list';
import SeriesLoader from '../../components/series-loader/series-loader';
import { expect } from 'chai';

describe('List Container', () => {
    let Component;
    let SeriesListComponent;
    let SeriesLoaderComponent;

    beforeEach(() => {
        const store = storeFake({
            series: {}
        });

        const wrapper = mount(
            <Provider store={store}>
                <List
                    items={[]}
                    isFetching={true}
                    getSeries={() => {}}
                />
            </Provider>
        );

        Component = wrapper.find(List);
        SeriesListComponent = Component.find(SeriesList);
        SeriesLoaderComponent = Component.find(SeriesLoader);
    });

    it('should render SeriesListComponent', () => {
        expect(Component).to.have.length(1);
        expect(SeriesListComponent).to.have.length(1);
        expect(SeriesLoaderComponent).to.have.length(1);
    });
});
