/* eslint-disable strict */

/**
 * @desc Utils functions
 * Test cases are ion ./test/utils.test.js
 */

'use strict';


const getSteps = (command) => {
    const regex = /([RL]|\w(\d*)\d)/g;
    return command.match(regex);
}
module.exports = {
    getSteps
};
