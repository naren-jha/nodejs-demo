const fs = require('fs');

//var files = fs.readdirSync('./');
// console.log(files);

// ['app.js', 'file-system-module.js', 'logger.js', 'os-module.js', 'path-module.js']


fs.readdir('./', function(err, result) {
	// here either we'll have err or result
	if (err) console.log(err);
	else console.log(result);
});
// ['app.js', 'file-system-module.js', 'logger.js', 'os-module.js', 'path-module.js']
