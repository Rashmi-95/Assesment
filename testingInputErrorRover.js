let executeFunction = require('./executionFunction.js');
function landRover(grid, position, direction, pathCommand) {
  //console.log(grid, position, direction, pathCommand);
  // grid error
  if(grid === undefined) {
    let error = 'The grid is undefined';
    return error;
  }
  if('number' !== typeof(grid[0]) || 'number' !== typeof(grid[1])) {
    let error = 'The grid size (row,cloumn) is not a valid number';
    return error;
  } 
  if(Number.isInteger(grid[0]) !== true || Number.isInteger(grid[1]) !== true) {
    let error = 'The grid size is not a valid Integer';
    return error;
  }
  if(grid[0] < 0 || grid[1] < 0 ) {
    let error = 'The gird size must be greater than zero';
    return error;
  }
  //position error
  if(position === undefined) {
    let error = 'The Rover Position is undefined';
    return error;
  }
  if('number' !== typeof(position[0]) || 'number' !== typeof(position[1])) {
    let error = 'The position is not a valid number';
    return error;
  } 
  if(Number.isInteger(position[0]) !== true || Number.isInteger(position[1]) !== true) {
    let error = 'The position of rover is valid Integer';
    return error;
  }
  if(position[0] < 0 || position[0] > grid[0]-1 || position[1] < 0 || position[1] > grid[1]-1) {
    let error = 'The position of rover is not valid with respect to grid coordinates';
    return error;
  }
  // direction error
  if(direction === undefined) {
    let error = 'The Rover Direction is undefined';
    return error;
  }
  if('string' !== typeof(direction) || direction.length !== 1) {
    let error = 'The Rover Direction is not a single Character';
    return error;
  }
  if(!(direction === 'N' || direction === 'S' || direction === 'E' || direction === 'W')) {
    let error = 'The Rover Direction is not valid direction [N, S, E, W]';
    return error;
  }
  // pathCommand error
  if(pathCommand === undefined) {
    let error = 'The pathCommand is undefined';
    return error;
  }
  if('string' !== typeof(pathCommand)) {
    let error = 'The pathCommand is not a set of characters';
    return error;
  }
  if(!(new RegExp("^[RLM]+$").test(pathCommand))) {
    let error = 'The pathCommand is contains command other than [R, L, M]';
    return error;
  }  
  var result = executeFunction(grid, position, direction, pathCommand);
  return result;
}
module.exports = landRover