function executeFunction(grid, position, direction, pathString) {
  let pathCommand = pathString.split('');
  for (let command of pathCommand) {
    var rightNEWS = {
      N: 'E',
      E: 'S',
      S: 'W',
      W: 'N'
    }
    var leftNEWS = {
      N: 'W',
      E: 'N',
      S: 'E',
      W: 'S'
    }
    if (command === 'L') {
      direction = leftNEWS[direction];
    } else if (command === 'R') {
      direction = rightNEWS[direction];
    } else {
      switch (direction) {
        case 'N':
          if (position[0] !== 0)
            position[0]--;
          break;
        case 'E':
          if (position[1] !== grid[1] - 1)
            position[1]++;
          break;
        case 'S':
          if (position[0] !== grid[0] - 1)
            position[0]++;
          break;
        case 'W':
          if (position[1] !== 0)
            position[1]--;
          break;
      }
    }
  }
  return(`Rover at position ${position} facing ${direction}`);
}

module.exports = executeFunction