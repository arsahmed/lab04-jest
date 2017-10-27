'use strict';

import {greet, invertCase} from '../js/app'; //import the functions to test!

/* tests go here */

test('should add numbers correctly', function() {
    let result = 1+1

    expect(result).toEqual(2);
});

describe('Basic math', function() {
    it('should add numbers correctly', function() {
        let result = 1+1;

        expect(result).toEqual(2);
    })
});

describe('invertCase("Computer") function', function() {
    it('should invert the case of each letter', function() {
        let result = invertCase("Computer");
        expect(result).toEqual('cOMPUTER');
    })
})