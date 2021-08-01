function log(message) {
	console.log(message);
}

function log2(message) {
	console.log(message);
}

class TestClass {
	async log3(message) {
		console.log(message);
	}
}

module.exports.log = log;
module.exports.log2 = log2;

module.exports.TestClass = TestClass;