const EventEmitter = require('events');
const emitter = new EventEmitter();

// emitter.addListner() is same as emitter.on()
emitter.on('messageLogged', function() {
	console.log('listner called');
});

emitter.emit('messageLogged'); // raise event called 'messageLogged'

// event with arguments
emitter.on('responseSent', function(arg) {
	console.log('listner called', arg);
});

// using arrow function
emitter.on('responseSent', (arg) => {
	console.log('listner called', arg);
});

emitter.emit('responseSent', {id: 1, url: 'https://'});
