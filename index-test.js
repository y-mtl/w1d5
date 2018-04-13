var chalk = require('chalk');

//var message = 'Hello ' + chalk.yellow('World');
var message = 'this is ' + chalk.magentaBright.bgWhiteBright('new color');

var newMessage = 'this is ' + chalk.bgRgb(255, 255, 255).inverse('new test');

var multiples = chalk.red.bold.underline('Hello', 'world');

console.log(message);
console.log(newMessage);
console.log(multiples);

console.log(chalk.yellow('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));