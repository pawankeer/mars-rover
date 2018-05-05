const { orientation: { NORTH, SOUTH, EAST, WEST }, command: { LEFT, RIGHT } } = require('./constants');

let mapping = {};
mapping[`${NORTH}${LEFT}`] = WEST;
mapping[`${NORTH}${RIGHT}`] = EAST;
mapping[`${SOUTH}${LEFT}`] = EAST;
mapping[`${SOUTH}${RIGHT}`] = WEST;
mapping[`${WEST}${LEFT}`] = SOUTH;
mapping[`${WEST}${RIGHT}`] = NORTH;
mapping[`${EAST}${LEFT}`] = NORTH;
mapping[`${EAST}${RIGHT}`] = SOUTH;

module.exports.actionTurn = function (currentOrientation, direction) {
    return mapping[`${currentOrientation}${direction}`];
};