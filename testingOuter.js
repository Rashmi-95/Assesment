let landrover = require('./testingInputErrorRover');
console.log('running');
var error = landrover(undefined, [3, 3], 'N', 'MMLMLMLMLML');
console.log(error);
var error = landrover([10, 'g'], [3, 3], 'N', 'MMLMLMLMLML');
console.log(error);
var error = landrover([10, 2.2], [3, 3], 'N', 'MMLMLMLMLML');
console.log(error);
var error = landrover([10, -9], [3, 3], 'N', 'MMLMLMLMLML');
console.log(error);

var error = landrover([10, 10], undefined, 'N', 'MMLMLMLMLML');
console.log(error);
var error = landrover([10, 10], [3, 'f'], 'N', 'MMLMLMLMLML');
console.log(error);
var error = landrover([10, 10], [5.1, 1], 'N', 'MMLMLMLMLML');
console.log(error);
var error = landrover([10, 10], [5, 10], 'N', 'MMLMLMLMLML');
console.log(error);

var error = landrover([10, 10], [5, 3], undefined, 'MMLMLMLMLML');
console.log(error);
var error = landrover([10, 10], [5, 3], 'Kfr', 'MMLMLMLMLML');
console.log(error);
var error = landrover([10, 10], [5, 3], 'K', 'MMLMLMLMLML');
console.log(error);

var error = landrover([10, 10], [5, 3], 'N', undefined);
console.log(error);
var error = landrover([10, 10], [5, 3], 'N', 10);
console.log(error);
var error = landrover([10, 10], [5, 3], 'N', 'lRLMLRM');
console.log(error);

var error = landrover([10, 10], [3, 3], 'N', 'MMLMLMLMLML');
console.log(error);
var error = landrover([10, 10], [3, 3], 'N', 'MMLMLMLMLMLR');
console.log(error);