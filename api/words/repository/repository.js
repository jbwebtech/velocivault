const Library = require('../model/library');
const mockData = require('./mock-datastore');

const library = new Library();

library.addWords(mockData.getNouns());
library.addWords(mockData.getVerbs());
library.addWords(mockData.getAdverbs());
library.addWords(mockData.getAdjectives());
library.addSpecialCharacters(mockData.getSpecialCharacters());
console.log('Mock data loaded.');

const getLibrary = () => {
    return library;
}

module.exports = {
    getLibrary
};