let fs = require('fs');
let path = require('path');
let functionToUse = require('./testingInputErrorRover.js');

function filterFile(fileName = './inputFile.txt') {
  let stat = fs.statSync(fileName);
  if (1000000000 < stat['size']) {
    error = 'The File size is big.';
    console.log(error);
    return error;
  }
  fileContents = fs.readFileSync(fileName);
    let bufferStringArray = fileContents.toString().trim().split('\n');
    let grid = bufferStringArray[0].trim().split(' ');
    let pathCommand = bufferStringArray[2];
    let positionDirection = bufferStringArray[1].trim().split(' ');
    let position =[], direction;
    [position[0],position[1],direction] = positionDirection;

    grid[0] = Number(grid[0]);
    grid[1] = Number(grid[1]);  
    position[0] = Number(position[0]);
    position[1] = Number(position[1]);

    let result  = functionToUse(grid, position, direction, pathCommand);
    return result;
    //console.log(result);
  }
 
 module.exports = filterFile