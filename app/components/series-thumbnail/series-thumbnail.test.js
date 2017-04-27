import React from 'react';
import {shallow} from 'enzyme';
import SeriesThumbnail from './series-thumbnail';
import { expect } from 'chai';

describe('SeriesThumbnail', () => {
    it('should render a image with alt text', () => {
        const seriesList = shallow(
            <SeriesThumbnail title='A Title' src='image.url'/>
        );

        let img = seriesList.find('img');

        expect(img).to.have.length(1);
        expect(img.prop('alt')).to.equal('A Title')
    });

    it('should render a placeholder', () => {
        const seriesList = shallow(
            <SeriesThumbnail title='A Title'/>
        );

        let img = seriesList.find('img');

        expect(img).to.have.length(0);
        expect(seriesList.text('A Title')).to.equal('A Title')
    });
});
