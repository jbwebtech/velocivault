const fs = require("fs");
const path = require("path");

const BASE_DIR_PATH = "./mock/";
const NOUNS_DIR_PATH = path.join(BASE_DIR_PATH, "nouns");
const VERBS_DIR_PATH = path.join(BASE_DIR_PATH, "verbs");
const ADVERBS_DIR_PATH = path.join(BASE_DIR_PATH, "adverbs");
const ADJECTIVES_DIR_PATH = path.join(BASE_DIR_PATH, "adjectives");
const SPECIAL_CHARACTERS_DIR_PATH = path.join(BASE_DIR_PATH, "chars");

const readItemsFromDir = (dirPath) => {
  const items = [];
  fs.readdirSync(dirPath).forEach((filename) => {
    let fileData = fs.readFileSync(path.join(dirPath, filename));
    let json = JSON.parse(fileData); // array of words
    items.push(...json);
  });
  return items;
};

const getNouns = () => {
  return readItemsFromDir(NOUNS_DIR_PATH);
};

const getVerbs = () => {
  return readItemsFromDir(VERBS_DIR_PATH);
};

const getAdverbs = () => {
  return readItemsFromDir(ADVERBS_DIR_PATH);
};

const getAdjectives = () => {
  return readItemsFromDir(ADJECTIVES_DIR_PATH);
};

const getSpecialCharacters = () => {
    const chars = [];
    fs.readdirSync(SPECIAL_CHARACTERS_DIR_PATH).forEach((filename) => {
        let fileData = fs.readFileSync(path.join(SPECIAL_CHARACTERS_DIR_PATH, filename));
        let json = JSON.parse(fileData); // array of strings (chars)
        chars.push(...json);
    });
    return chars;
};

module.exports = {
  getNouns,
  getVerbs,
  getAdverbs,
  getAdjectives,
  getSpecialCharacters,
};
