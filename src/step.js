module.exports.step = function (currentOrientation, currentCoordiates) {
    const currentX = currentCoordiates.x;
    const currentY = currentCoordiates.y;
    let newCoordinates = {};
    switch (currentOrientation) {
        case 'N':
            newCoordinates.x = currentX;
            newCoordinates.y = currentY + 1;
            break;
        default:
            newCoordinates.x = currentX;
            newCoordinates.y = currentY;
    }
    return newCoordinates;
};