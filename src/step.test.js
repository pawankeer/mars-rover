const assert = require('assert');
const { step } = require('./step');

describe('should test step', function () {
   it('makes coordinates (0,1) when N and (0,0)', function () {
       const currentOrrientation = 'N';
       const currentCoordinates = { x: 0, y: 0 };
       const newCoordinates = step(currentOrrientation, currentCoordinates);
       assert.equal(newCoordinates.x, 0);
       assert.equal(newCoordinates.y, 1);
   });
    it('makes coordinates (0,-1) when S and (0,0)', function () {
        const currentOrrientation = 'S';
        const currentCoordinates = { x: 0, y: 0 };
        const newCoordinates = step(currentOrrientation, currentCoordinates);
        assert.equal(newCoordinates.x, 0);
        assert.equal(newCoordinates.y, -1);
    });
    it('makes coordinates (-1,0) when W and (0,0)', function () {
        const currentOrrientation = 'W';
        const currentCoordinates = { x: 0, y: 0 };
        const newCoordinates = step(currentOrrientation, currentCoordinates);
        assert.equal(newCoordinates.x, -1);
        assert.equal(newCoordinates.y, 0);
    });
    it('makes coordinates (1,0) when E and (0,0)', function () {
        const currentOrrientation = 'E';
        const currentCoordinates = { x: 0, y: 0 };
        const newCoordinates = step(currentOrrientation, currentCoordinates);
        assert.equal(newCoordinates.x, 1);
        assert.equal(newCoordinates.y, 0);
    });
});