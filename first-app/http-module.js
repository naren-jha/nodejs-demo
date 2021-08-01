const http = require('http');

/*

const server = http.createServer(); // this server is an EventEmitter

server.on('connection', (socket) => {
	console.log('new connection');
});

*/

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('Hello world!');
		res.end();
	}

	if (req.url === '/api/courses') {
		res.write(JSON.stringify([1,2,3,4,5]));
		res.end();
	}
});

server.listen(3000);

console.log('listening on port 3000');


/*
In real world applications, we are not going to use http module
as things get a little complicated handling all the different routes.
Instead, we are going to use a framework called 'express' which simplifies things.
'express' is built on top of http module.
*/