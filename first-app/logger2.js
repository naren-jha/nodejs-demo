const EventEmitter = require('events'); // exports EventEmitter class

class Logger extends EventEmitter {
	// when we declare a function inside a class, we don't need the 'function' keyword
	// functions inside a class are called methods.

	log(message) {
		// log message
		console.log(message);

		// raise event
		this.emit('messageLogged', {id: 1, url: 'https://'});
	}
}


module.exports = Logger;
