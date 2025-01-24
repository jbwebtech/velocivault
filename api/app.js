require('dotenv').config();
const express = require('express');

const repository = require('./repository');
const { Library, Word, Noun, Verb, Adverb, Adjective } = require('./lib');

const PORT = process.env.PORT || 3000;
const app = express();

let a ="b";

app.get('/', (req, res) => {
    res.status(501).send('API service not implemented at this URL');
});

app.get('/api/v1/words', (req, res) => {
    res.json(repository.getLibrary());
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
