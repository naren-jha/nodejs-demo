const os = require('os');

var platform = os.platform();
var totalMem = os.totalmem();
var freeMem = os.freemem();


console.log(`platform : ${platform}`);
console.log(`total memory : ${totalMem}`);
console.log(`free memory : ${freeMem}`);

/*
platform : darwin
total memory : 17179869184
free memory : 4618104832
*/
