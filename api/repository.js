const fs = require('fs');

const { Library, Word, Noun, Verb, Adverb, Adjective } = require('./lib');


const getLibrary = () => {
    const lib = new Library();
    fs.readdirSync('./data/nouns').forEach(filename => {
        let fileData = fs.readFileSync(`./data/nouns/${filename}`);
        let json = JSON.parse(fileData);
        lib.addWords(json);
    });
    return lib;
}

module.exports = {
    getLibrary
};