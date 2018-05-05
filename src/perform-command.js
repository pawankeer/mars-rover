const {actionTurn} = require('./action-turn');
const {step} = require('./step');
const {command: {LEFT, RIGHT, STEP, QUIT}} = require('./constants');

const performCommand = function(currentOrientation, currentCoordinates, quit, callback) {
    return function (err, result) {
        const input = result.input.toUpperCase();
        switch (input) {
            case STEP:
                const newCoordinates = step(currentOrientation, currentCoordinates);
                callback(currentOrientation, newCoordinates, quit, performCommand);
                break;
            case LEFT:
            case RIGHT:
                const newOrientation = actionTurn(currentOrientation, input);
                callback(newOrientation, currentCoordinates, quit, performCommand);
                break;
            case QUIT:
                quit = true;
                break;
            default:
                callback(currentOrientation, currentCoordinates, quit, performCommand);
        }
    }
};

module.exports = { performCommand };