const assert = require('assert');
const {performCommand} = require('./perform-command');

describe('perform command', function () {
    it('should quit=true for command Q', function () {
        performCommand(null, null, false, function (currentOrientation, newCoordinates, quit) {
            assert.equals(quit, true);
        });
    });
});