const prompt = require('prompt');
const {actionTurn} = require('./action-turn');
const {step} = require('./step');
const {print} = require('./print');
const {orientation: {NORTH, SOUTH, WEST, EAST}, command: {LEFT, RIGHT, STEP, QUIT}} = require('./constants');

let currentOrientation = NORTH;
let currentCoordinates = {x: 0, y: 0};
let quit = false;

const promptInput = function (callback) {
    prompt.start();
    print(currentOrientation, currentCoordinates);
    prompt.get(['input'], callback);
};

const performAction = function (err, result) {
    const input = result.input.toUpperCase();
    switch (input) {
        case STEP:
            currentCoordinates = step(currentOrientation, currentCoordinates);
            promptInput(performAction);
            break;
        case LEFT:
        case RIGHT:
            console.log(input);
            currentOrientation = actionTurn(currentOrientation, input);
            promptInput(performAction);
            break;
        case QUIT:
            quit = true;
            break;
        default:
            promptInput(performAction);
    }
};

if (process.argv.indexOf('prod') !== -1)
    promptInput(performAction);