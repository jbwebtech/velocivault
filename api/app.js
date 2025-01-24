require('dotenv').config();
const express = require('express');

const repository = require('./words/repository/repository');

const PORT = process.env.PORT || 3000;
const app = express();
const library = repository.getLibrary();

app.get('/', (req, res) => {
    res.status(501).send('API service not implemented at this URL');
});

app.get('/api/v1/words', (req, res) => {
    res.json(library);
});


class Passphrase {
    constructor(passphrase) {
        this.passphrase = passphrase;
        this.length = passphrase.length;
        this.containsUpper = /[A-Z]/.test(passphrase);
        this.containsLower = /[a-z]/.test(passphrase);
        this.containsNumber = /[0-9]/.test(passphrase);
        this.containsSpecial = /[^A-Za-z0-9]/.test(passphrase);
        this.containsWhitespace = /\s/.test(passphrase);
    }
}

const generatePassphrase = () => {
    const randomWords = library.getRandomWords(3).map(word => word.word.replace(/ /g, ''));
    const passphrase = randomWords.map(word => 
        library.getSpecialCharacters(1) +
        library.getRandomNumber(1) +
        word + 
        library.getSpecialCharacters(1) +
        library.getRandomNumber(1)
    ).join('');
    return new Passphrase(passphrase);
}

app.get('/api/v1/passphrases', (req, res) => {
    res.json(generatePassphrase());
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
