import mapper from './mapper';
import { expect } from 'chai';

//TODO add describe and should and chai to all tests

describe('Mapper', () => {
    it('should map api data', () => {
        let mappedData = mapper({

        });

        expect(mappedData).to.have.length(0);
    });
});
