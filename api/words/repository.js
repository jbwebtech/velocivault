const Library = require("../model/library");
const mockData = require("./mock-datastore");

class WordRepository {
  constructor() {
    this.library = new Library();
    this.loadMockData();
  }

  loadMockData() {
    this.library.addWords(mockData.getNouns());
    this.library.addWords(mockData.getVerbs());
    this.library.addWords(mockData.getAdverbs());
    this.library.addWords(mockData.getAdjectives());
    this.library.addSpecialCharacters(mockData.getSpecialCharacters());
    console.log("Mock data loaded.");
  }

  getLibrary() {
    return this.library;
  }
}

module.exports = WordRepository;