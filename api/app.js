require('dotenv').config();
const express = require('express');

const repository = require('./repository');

const PORT = process.env.PORT || 3000;
const app = express();
const library = repository.getLibrary();

app.get('/', (req, res) => {
    res.status(501).send('API service not implemented at this URL');
});

app.get('/api/v1/words', (req, res) => {
    res.json(library);
});

app.get('/api/v1/passphrases', (req, res) => {
    const randomWords = library.getRandomWords(3).map(word => word.word.replace(/ /g, ''));
    const passphrase = randomWords.map(word => 
        library.getSpecialCharacters(1) +
        library.getRandomNumber(1) +
        word + 
        library.getSpecialCharacters(1) +
        library.getRandomNumber(1)
    ).join('');
    res.json({
        passphrase: passphrase,
        length: passphrase.length,
        containsUpper: /[A-Z]/.test(passphrase),
        containsLower: /[a-z]/.test(passphrase),
        containsNumber: /[0-9]/.test(passphrase),
        containsSpecial: /[^A-Za-z0-9]/.test(passphrase),
        containsWhitespace: /\s/.test(passphrase),
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
