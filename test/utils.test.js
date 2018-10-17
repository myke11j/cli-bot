/* eslint-disable strict */

'use strict';

const { expect } = require('chai');
/* eslint-disable func-names, prefer-arrow-callback, no-undef, no-unused-expressions */
const {
    getSteps
} = require('../utils.js')

describe('Utils methods - unit tests', function () {
    describe('getSteps function', function () {
        describe('Success cases', function () {
            it('Invalid Command: AhdWh@W', function () {
                const command = 'AhdWh@W'
                const steps = getSteps(command);
                expect(steps).to.be.null;
            })
            it('Test case 2: W5RW5RW2RW1R', function () {
                const command = 'W5RW5RW2RW1R'
                const steps = getSteps(command);
                // 8 steps: W5, R, W5, R, W2, R, W1, E
                expect(steps.length).to.eql(8)
            })
            it('Test case 3: RRW11RLLW19RRW12LW1', function () {
                const command = 'RRW11RLLW19RRW12LW1'
                const steps = getSteps(command);
                // 12 steps: R, R, W11, R, L, L, W19, R, R, W12, L, W1
                expect(steps.length).to.eql(12)
            })
            it('Test case 4: LLW100W50RW200W10', function () {
                const command = 'LLW100W50RW200W10'
                const steps = getSteps(command);
                expect(steps.length).to.eql(7)
            })
            it('Test case 5: LLLLLW99RRRRRW88LLLRL', function () {
                const command = 'LLLLLW99RRRRRW88LLLRL'
                const steps = getSteps(command);
                expect(steps.length).to.eql(17)
            })
            it('Test case 6: W55555RW555555W444444W1', function () {
                const command = 'W55555RW555555W444444W1'
                const steps = getSteps(command);
                expect(steps.length).to.eql(5)
            })
        })
    })
});
