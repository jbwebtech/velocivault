const fs = require('fs');

const mockData = require('./mock-datastore');
const { Library } = require('./lib');

const library = new Library();

console.log('Loading mock data...');
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