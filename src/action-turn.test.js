const assert = require('assert');
const {actionTurn} = require('./action-turn');

describe('should test action', function () {
    describe('Current orientation N', function () {
        const currentOrientation = 'N';
        it('turns W for direction L', function () {
            const direction = 'L';
            const newOrientation = actionTurn(currentOrientation, direction);
            assert.equal(newOrientation, 'W');
        });

        it('turns E for direction R', function () {
            const direction = 'R';
            const newOrientation = actionTurn(currentOrientation, direction);
            assert.equal(newOrientation, 'E');
        });
    });
    describe('Current orientation S', function () {
        const currentOrientation = 'S';
        it('turns W for direction L', function () {
            const direction = 'L';
            const newOrientation = actionTurn(currentOrientation, direction);
            assert.equal(newOrientation, 'E');
        });

        it('turns E for direction R', function () {
            const direction = 'R';
            const newOrientation = actionTurn(currentOrientation, direction);
            assert.equal(newOrientation, 'W');
        });
    });
    describe('Current orientation W', function () {
        const currentOrientation = 'W';
        it('turns W for direction L', function () {
            const direction = 'L';
            const newOrientation = actionTurn(currentOrientation, direction);
            assert.equal(newOrientation, 'S');
        });

        it('turns E for direction R', function () {
            const direction = 'R';
            const newOrientation = actionTurn(currentOrientation, direction);
            assert.equal(newOrientation, 'N');
        });
    });
    describe('Current orientation E', function () {
        const currentOrientation = 'E';
        it('turns W for direction L', function () {
            const direction = 'L';
            const newOrientation = actionTurn(currentOrientation, direction);
            assert.equal(newOrientation, 'N');
        });

        it('turns E for direction R', function () {
            const direction = 'R';
            const newOrientation = actionTurn(currentOrientation, direction);
            assert.equal(newOrientation, 'S');
        });
    });
});