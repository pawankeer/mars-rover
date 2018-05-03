const assert = require('assert');
const {actionTurn} = require('./action-turn');

describe('should test action', function () {
    it('turns W when facing N for direction L', function () {
        const currentOrrientation = 'N';
        const direction = 'L';
        const newOrrientation = actionTurn(currentOrrientation, direction);
        assert.equal(newOrrientation, 'W');
    });

    it('turns E when facing N for direction R', function () {
        const currentOrrientation = 'N';
        const direction = 'R';
        const newOrrientation = actionTurn(currentOrrientation, direction);
        assert.equal(newOrrientation, 'E');
    });
});