const Logger = require('./logger2.js');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
	console.log('listner called', arg);
});

logger.log('message');

