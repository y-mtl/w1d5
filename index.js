var myModule = require('./custom-module.js');


console.log(myModule.listOfNumbers(20, 5, 10));

console.log(myModule.listOfNumbers(3, 5));
console.log(myModule.listOfNumbers(10, 5, 10));
console.log(myModule.listOfNumbers(20, 3, 5));

console.log(myModule.sorting());
// no need to add arr here,
// because the module already has a list with values;

// myModule.list.push('hjbvhj') -> cannot access to list directly