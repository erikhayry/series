import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { storeFake } from '../../__mocks__/store';
import List from './list';
import SeriesList from '../../components/series-list/series-list';

describe('List container', () => {
    let Component;
    let SeriesListComponent;

    beforeEach(() => {
        const store = storeFake({
            series: {}
        });

        const wrapper = mount(
            <Provider store={store}>
                <List
                    series={[]}
                    isFetching={true}
                    dispatch={function(){
                        //REMOVE
                    }}
                />
            </Provider>
        );

        Component = wrapper.find(List);
        SeriesListComponent = Component.find(SeriesList);
    });

    it('should render', () => {
        expect(Component.length).toBeTruthy();
        expect(SeriesListComponent.length).toBeTruthy();
    });

    //TODO add more tests
});
