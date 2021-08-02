const Joi = require('joi'); // put all require() calls at the top of the file
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
	{id: 1, name: 'course 1'},
	{id: 2, name: 'course 2'},
	{id: 3, name: 'course 3'}
];

app.get('/', (req, res) => {
	res.send('Hello world!!!');
});

app.get('/api/courses', (req, res) => {
	res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
	let course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) {
		res.status(404).send('The course with the given id was not found!');
		return
	}
	res.status(200).send(course);
});

app.post('/api/courses', (req, res) => {
	/*
	const schema = {
		name: Joi.string().min(3).required()
	};

	const result = Joi.validate(req.body, schema);
	console.log(result);
	*/

	if (!req.body.name || req.body.name.length < 3) {
		// 400 - bad request
		res.status(400).send('name is required and should be minimum 3 characters');
		return;
	}

	const course = {
		id: courses.length + 1,
		name: req.body.name
	};

	courses.push(course);
	res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
	let course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) {
		res.status(404).send('The course with the given id was not found!');
		return
	}

	if (!req.body.name || req.body.name.length < 3) {
		res.status(400).send('name is required and should be minimum 3 characters');
		return;
	}

	course.name = req.body.name;
	res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
	let course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course) {
		res.status(404).send('The course with the given id was not found!');
		return
	}

	let index = courses.indexOf(course);
	courses.splice(index, 1);
	res.send(course);
})

app.get('/api/posts/:year/:month', (req, res) => {
	res.send(req.params);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));