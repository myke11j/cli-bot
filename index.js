/* eslint-disable strict */

'use strict'

const {
    getSteps
} = require('./utils.js')
const Bot = require('./bot.class.js')

const init = () => {
    const args = process.argv.slice(2);
    if (!args.length) {
        console.log('No Command passed for bot');
        process.exit();
    }
    const command = args[0]
    const steps = getSteps(command)
    if (!steps) {
        console.log(`No steps found for command ${command}`)
        process.exit();
    }
    const newBot = new Bot(steps);
    newBot.executeSteps();
    const currentBotPosition = newBot.getCurrentPosition();
    console.log(`X: ${currentBotPosition.x}, Y: ${currentBotPosition.y} Direction: ${newBot.getDirection()}`);
    process.exit();
}

init();
