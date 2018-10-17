/* eslint-disable strict */

'use strict';

const { expect } = require('chai');
/* eslint-disable func-names, prefer-arrow-callback, no-undef, no-unused-expressions */

/* Functions to be unit tested */
const Bot = require('../bot.class.js');

let testBot = {};
describe('Bot Class Methods - unit tests', function () {
    before(function () {
        testBot = new Bot();
    })
    describe('Build test cases', function () {
        describe('Success cases', function () {
            it('Starting direction is north', function () {
                expect(testBot.getDirection()).to.eql('North')
            })
            it('Starting coors is x: 0, y: 0', function () {
                expect(testBot.getCurrentPosition().x).to.eql(0)
                expect(testBot.getCurrentPosition().y).to.eql(0)
            })
        })
    })
    describe('setCurrentPosition function', function () {
        describe('Success cases', function () {
            it('If x or y not passed default gets set to 0', function () {
                testBot.setCurrentPosition({ x: 7 })
                expect(testBot.getCurrentPosition().x).to.eql(7)
                expect(testBot.getCurrentPosition().y).to.eql(0)
            })
        })
    })
    describe('setDirection function', function () {
        describe('Success cases', function () {
            it('Invalid direction is not supported', function () {
                testBot.setCurrentPosition({ x: 7, y: 7 })
                const res = testBot.setDirection('SomeInvalidDirection')
                expect(res).to.be.false;
                expect(testBot.getCurrentPosition().x).to.eql(14)
                expect(testBot.getCurrentPosition().y).to.eql(7)
            })
            it('Valid direction is supported', function () {
                expect(testBot.getDirection()).to.eql('North') // default direction
                testBot.setDirection('South')
                expect(testBot.getDirection()).to.eql('South')
            })
        })
    })
    describe('calculateDirection function', function () {
        describe('Success cases', function () {
            it('If bot is moving in South, left will move him to East', function () {
                const res = testBot.calculateDirection('South', 'Left')
                expect(res).to.eql('East')
            })
            it('If bot is moving in North, left will move him to West', function () {
                const res = testBot.calculateDirection('North', 'Left')
                expect(res).to.eql('West')
            })
            it('If bot is moving in East, right will move him to south', function () {
                const res = testBot.calculateDirection('East', 'Right')
                expect(res).to.eql('South')
            })
            it('If bot is moving in West, right will move him to North', function () {
                const res = testBot.calculateDirection('West', 'Right')
                expect(res).to.eql('North')
            })
        })
    })
});
