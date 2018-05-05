const assert = require('assert');
const {actionTurn} = require('./action-turn');

describe('action turn', function () {
    describe('current orientation N', function () {
        const currentOrientation = 'N';
        it('should turn W for direction L', function () {
            const direction = 'L';
            const newOrientation = actionTurn(currentOrientation, direction);
            assert.equal(newOrientation, 'W');
        });

        it('should turn E for direction R', function () {
            const direction = 'R';
            const newOrientation = actionTurn(currentOrientation, direction);
            assert.equal(newOrientation, 'E');
        });
    });
    describe('current orientation S', function () {
        const currentOrientation = 'S';
        it('should turn W for direction L', function () {
            const direction = 'L';
            const newOrientation = actionTurn(currentOrientation, direction);
            assert.equal(newOrientation, 'E');
        });

        it('should turn E for direction R', function () {
            const direction = 'R';
            const newOrientation = actionTurn(currentOrientation, direction);
            assert.equal(newOrientation, 'W');
        });
    });
    describe('current orientation W', function () {
        const currentOrientation = 'W';
        it('should turn W for direction L', function () {
            const direction = 'L';
            const newOrientation = actionTurn(currentOrientation, direction);
            assert.equal(newOrientation, 'S');
        });

        it('should turn E for direction R', function () {
            const direction = 'R';
            const newOrientation = actionTurn(currentOrientation, direction);
            assert.equal(newOrientation, 'N');
        });
    });
    describe('current orientation E', function () {
        const currentOrientation = 'E';
        it('should turn W for direction L', function () {
            const direction = 'L';
            const newOrientation = actionTurn(currentOrientation, direction);
            assert.equal(newOrientation, 'N');
        });

        it('should turn E for direction R', function () {
            const direction = 'R';
            const newOrientation = actionTurn(currentOrientation, direction);
            assert.equal(newOrientation, 'S');
        });
    });
});