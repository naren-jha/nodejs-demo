const logger = require('./logger.js');

function sayHello(name) {
    console.log('Hello ' + name);
}

//sayHello('Narendra');

//console.log(module);

//console.log(logger);
logger.log('Hello there');
logger.log2('Hello there 2');

const loggerObj = new logger.TestClass();
loggerObj.log3('Hello there 3');

console.log(exports);
console.log(require);
console.log(module);
console.log(__filename);
console.log(__dirname);