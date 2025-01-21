require('dotenv').config();
const express = require('express');

const { Word, Noun, Verb, Adverb, Adjective } = require('./lib');

const PORT = process.env.PORT || 3000;
const app = express();

let a ="b";

app.get('/', (req, res) => {
    res.status(501).send('API service not implemented at this URL');
});

app.get('/api/v1/words', (req, res) => {
    res.json([
        new Word('Aye-Aye'),
        new Word('Dik-Dik'),
        new Word('Fennec'),
        new Word('Gazelle'),
        new Word('Hedgehog'),
        new Word('Ibex'),
        new Word('Jaguarundi'),
        new Word('Kinkajou'),
        new Word('Lemur'),
        new Word('Mongoose')
    ]);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
