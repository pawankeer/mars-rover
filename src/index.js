const prompt = require('prompt');
const {performCommand} = require('./perform-command');
const {print} = require('./print');
const {orientation: {NORTH}} = require('./constants');

const promptInput = function (currentOrientation, currentCoordinates, quit, callback) {
    print(currentOrientation, currentCoordinates);
    prompt.get(['input'], callback(currentOrientation, currentCoordinates, quit, promptInput));
};

if (process.argv.indexOf('prod') !== -1) {
    const currentOrientation = NORTH;
    const currentCoordinates = {x: 0, y: 0};
    const quit = false;

    prompt.start();
    promptInput(currentOrientation, currentCoordinates, quit, performCommand);
}