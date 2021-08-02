const express = require('express');
const app = express();

app.use(express.json());

let genres = [
	{id: 1, name: 'Action'},
	{id: 2, name: 'Sci-Fi'},
	{id: 3, name: 'Drama'}
];

app.get('/', (req, res) => {
	res.send('Hello world!!!');
});

app.get('/api/genres/', (req, res) => {
	res.send(genres);
});

app.get('/api/genres/:id', (req, res) => {
	const genre = genres.find(e => e.id === parseInt(req.params.id));
	if (!genre) return res.status(404).send('no such genre!');

	res.send(genre);
});

app.post('/api/genres/', (req, res) => {
	if (!req.body.name || req.body.name.length < 2)
		return res.status(400).send('name is required and should be minimum 2 characters');

	const genre = {
		id: genres.length+1,
		name: req.body.name
	};
	genres.push(genre);
	res.send(genre);
});

app.put('/api/genres/:id', (req, res) => {
	const genre = genres.find(e => e.id === parseInt(req.params.id));
	if (!genre) return res.status(404).send('no such genre!');

	if (!req.body.name || req.body.name.length < 2)
		return res.status(400).send('name is required and should be minimum 2 characters');

	genre.name = req.body.name;
	res.send(genre);
});

app.delete('/api/genres/:id', (req, res) => {
	const genre = genres.find(e => e.id === parseInt(req.params.id));
	if (!genre) return res.status(404).send('no such genre!');

	var index = genres.indexOf(genre);
	genres.splice(index, 1);
	res.send(genre);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));