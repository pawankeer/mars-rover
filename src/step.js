const { orientation: { NORTH, SOUTH, EAST, WEST } } = require('./constants');

module.exports.step = function (currentOrientation, currentCoordiates) {
    const currentX = currentCoordiates.x;
    const currentY = currentCoordiates.y;
    let newCoordinates = {};
    switch (currentOrientation) {
        case NORTH:
            newCoordinates.x = currentX;
            newCoordinates.y = currentY + 1;
            break;
        case SOUTH:
            newCoordinates.x = currentX;
            newCoordinates.y = currentY - 1;
            break;
        case WEST:
            newCoordinates.x = currentX - 1;
            newCoordinates.y = currentY;
            break;
        case EAST:
            newCoordinates.x = currentX + 1;
            newCoordinates.y = currentY;
            break;
        default:
            newCoordinates.x = currentX;
            newCoordinates.y = currentY;
    }
    return newCoordinates;
};