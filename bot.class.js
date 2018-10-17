/**
 * @desc This is Bot Class. Test cases of following class are present in 
 * ./test/bot.test.js
 * To avoid setting up babel and for the sake of simplicity in assignment, 
 * I'm using ES5 way of creating class, i.e, not using 'Class'.
 */

/* Starting position for every Bot */
const origin = {
    x: 0,
    y: 0
};

const supportedDirections = [
    'North',
    'South',
    'East',
    'West'
]

function Bot(steps) {
    this.position = origin;
    this.direction = 'North'; /* By default bot will be facing North */
    this.steps = steps;
}

Bot.prototype.getCurrentPosition = function () { return this.position };

Bot.prototype.setCurrentPosition = function (position) {
    const { x, y } = position;
    /* If x or y are not passed, set current co-ordinate of bot */
    this.position.x = x || this.position.x;
    this.position.y = y || this.position.y;
}

Bot.prototype.getDirection = function () { return this.direction };

Bot.prototype.setDirection = function (direction) {
    if (supportedDirections.indexOf(direction) === -1) {
        console.log(`${direction} is not supported direction`);
        return false;
    }
    this.direction = direction;
}

Bot.prototype.executeSteps = function () {
    let newDirection = '';
    let numOfSteps;
    let coords = {};
    this.steps.forEach((step) => {
        const movement = step.charAt(0)
        switch (movement) {
            case 'L':
                    newDirection = this.calculateDirection(this.direction, 'Left');
                    this.setDirection(newDirection);
                break;
            case 'R':
                    newDirection = this.calculateDirection(this.direction, 'Right');
                    this.setDirection(newDirection);
                break;
            case 'W':
                    numOfSteps = step.substring(1, step.length);
                    numOfSteps = parseInt(numOfSteps, 10)
                    coords = this.moveN(numOfSteps, this.direction)
                    this.setCurrentPosition(coords)
                break;
            default:
                break;
        }
    })
}

/**
 * @desc Find the new direction bot will move in after turning
 * @param {String} currentDirection Possible values: North, south, east, west
 * @param {String} turn Possible values Left or Right
 */
Bot.prototype.calculateDirection = function (currentDirection, turn) {
    let newDirection = ''
    switch (currentDirection) {
        case 'South':
                if (turn === 'Left') newDirection = 'East'
                else if (turn === 'Right') newDirection = 'West'
            break;
        case 'North':
                if (turn === 'Left') newDirection = 'West'
                else if (turn === 'Right') newDirection = 'East'
            break;
        case 'East':
                if (turn === 'Left') newDirection = 'North'
                else if (turn === 'Right') newDirection = 'South'
            break;
        case 'West':
                if (turn === 'Left') newDirection = 'South'
                else if (turn === 'Right') newDirection = 'North'
            break;
        default:
            break;
    }
    return newDirection;
}

/**
 * @desc Calculates new coordinates based on number of steps and current direction
 * @param {Number} N - Number of steps to walk straight
 * @param {String} direction - Direction in which bot is moving
 */
Bot.prototype.moveN = function (N, direction) {
    const coords = {}
    switch (direction) {
        case 'South':
                coords.y = -N
            break;
        case 'North':
                coords.y = N
            break;
        case 'East':
                coords.x = N
            break;
        case 'West':
                coords.x = -N
            break;
        default:
            break;
    }
    return coords;
}

module.exports = Bot;
