const assert = require('assert');
const { step } = require('./step');

describe('step', function () {
    describe('current coordinates (0,0)', function () {
        it('should make coordinates (0,1) for orientation N', function () {
            const currentOrientation = 'N';
            const currentCoordinates = { x: 0, y: 0 };
            const newCoordinates = step(currentOrientation, currentCoordinates);
            assert.equal(newCoordinates.x, 0);
            assert.equal(newCoordinates.y, 1);
        });
        it('should make coordinates (0,-1) for orientation S', function () {
            const currentOrientation = 'S';
            const currentCoordinates = { x: 0, y: 0 };
            const newCoordinates = step(currentOrientation, currentCoordinates);
            assert.equal(newCoordinates.x, 0);
            assert.equal(newCoordinates.y, -1);
        });
        it('should make coordinates (-1,0) for orientation W', function () {
            const currentOrientation = 'W';
            const currentCoordinates = { x: 0, y: 0 };
            const newCoordinates = step(currentOrientation, currentCoordinates);
            assert.equal(newCoordinates.x, -1);
            assert.equal(newCoordinates.y, 0);
        });
        it('should make coordinates (1,0) for orientation E', function () {
            const currentOrientation = 'E';
            const currentCoordinates = { x: 0, y: 0 };
            const newCoordinates = step(currentOrientation, currentCoordinates);
            assert.equal(newCoordinates.x, 1);
            assert.equal(newCoordinates.y, 0);
        });
    });
});