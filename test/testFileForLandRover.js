var chai = require('chai');
var expect = chai.expect;
var functionToUse = require('../testingInputErrorRover.js');

describe('To check functionality of land Rover', function () {
    
    it('should return position and directing when proper input is passed', function () {
        expect(functionToUse([10, 10], [3, 3], 'N', 'MMLMLMLMLML')).to.eqls('Rover at position 1,3 facing W');
    });

});

describe('To check functionality for invalid input for grid is passed', function () {
    
    it('should return error when undefined grid  is passed', function () {
        expect(functionToUse(undefined, [3, 3], 'N', 'MMLMLMLMLML')).to.eqls('The grid is undefined');
    });
    it('should return error when gird size doesnt have number', function () {
        expect(functionToUse([10, 'g'], [3, 3], 'N', 'MMLMLMLMLML')).to.eqls('The grid size (row,cloumn) is not a valid number');
    });
    it('should return error when gird vale with float size is passed', function () {
        expect(functionToUse([10, 2.2], [3, 3], 'N', 'MMLMLMLMLML')).to.eqls('The grid size is not a valid Integer');
    });
    it('should return error when girld size less than 0 is passed', function () {
        expect(functionToUse([10, -9], [3, 3], 'N', 'MMLMLMLMLML')).to.eqls('The gird size must be greater than zero');
    });
    
});

describe('To check functionality for invalid input for position is passed', function () {
    
    it('should return error when undefined position  is passed', function () {
        expect(functionToUse([10, 10], undefined, 'N', 'MMLMLMLMLML')).to.eqls('The Rover Position is undefined');
    });
    it('should return error when is passed', function () {
        expect(functionToUse([10, 10], [3, 'f'], 'N', 'MMLMLMLMLML')).to.eqls('The position is not a valid number');
    });
    it('should return error when  is passed', function () {
        expect(functionToUse([10, 10], [5.1, 1], 'N', 'MMLMLMLMLML')).to.eqls('The position of rover is valid Integer');
    });
    it('should return error when is passed', function () {
        expect(functionToUse([10, 10], [5, 10], 'N', 'MMLMLMLMLML')).to.eqls('The position of rover is not valid with respect to grid coordinates');
    });
    
});

describe('To check functionality for invalid input for direction is passed', function () {
    
    it('should return error when undefined direction is passed', function () {
        expect(functionToUse([10, 10], [5, 3], undefined, 'MMLMLMLMLML')).to.eqls('The Rover Direction is undefined');
    });
    it('should return error when is direction is not a single character passed', function () {
        expect(functionToUse([10, 10], [5, 3], 'Kfr', 'MMLMLMLMLML')).to.eqls('The Rover Direction is not a single Character');
    });
    it('should return error when with invalid alphabet is passed', function () {
        expect(functionToUse([10, 10], [5, 3], 'K', 'MMLMLMLMLML')).to.eqls('The Rover Direction is not valid direction [N, S, E, W]');
    });
});

describe('To check functionality for invalid input for path is passed', function () {
    
    it('should return error when undefined path is passed', function () {
        expect(functionToUse([10, 10], [5, 3], 'N', undefined)).to.eqls('The pathCommand is undefined');
    });
    it('should return error when path with non string value is passed', function () {
        expect(functionToUse([10, 10], [5, 3], 'N', 10)).to.eqls('The pathCommand is not a set of characters');
    });
    it('should return error when path with invalid alphabets passed is passed', function () {
        expect(functionToUse([10, 10], [5, 3], 'N', 'lRLMLRM')).to.eqls('The pathCommand is contains command other than [R, L, M]');
    });
    
});