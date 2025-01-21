require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.status(501).send('API service not implemented at this URL.');
});

app.get('/api/v1/words', (req, res) => {
    res.json([
        'Aye-Aye',
        'Dik-Dik',
        'Fennec',
        'Gazelle',
        'Hedgehog',
        'Ibex',
        'Jaguarundi',
        'Kinkajou',
        'Lemur',
        'Mongoose'
    ]);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

