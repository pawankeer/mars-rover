const assert = require('assert');
const { step } = require('./step');

describe('should test step', function () {
   it('moves makes (0,1) when N and (0,0)', function () {
       const currentOrrientation = 'N';
       const currentCoordinates = { x: 0, y: 0 };
       const newCoordinates = step(currentOrrientation, currentCoordinates);
       assert.equal(newCoordinates.x, 0);
       assert.equal(newCoordinates.y, 1);
   })
});