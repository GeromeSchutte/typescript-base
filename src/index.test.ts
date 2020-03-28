import { aFunction } from './index';

describe('aFunction', () => {
    it('Should return a character', () => {
        const actual = aFunction();
        expect(actual).toBe('aaa');
    });
});