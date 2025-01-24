const Word = require('./word');
const WordType = require('./word-type');

class Library {
    constructor() {
        this.nouns = [];
        this.verbs = [];
        this.adverbs = [];
        this.adjectives = [];
        this.specialCharacters = [];
    }

    addSpecialCharacters(characters) {
        this.specialCharacters.push(...characters);
    }

    addWord(word) {
        if (word instanceof Word) {
            this.words.push(word);
        }
        else {
            const t = WordType[word.type.toUpperCase()];
            if (!t) {
                console.error(`Invalid word type: ${word.type}`);
                return;
            }
            const w = new Word(word.word, t);
            switch (t) {
                case WordType.NOUN:
                    this.nouns.push(w);
                    break;
                case WordType.VERB:
                    this.verbs.push(w);
                    break;
                case WordType.ADVERB:
                    this.adverbs.push(w);
                    break;
                case WordType.ADJECTIVE:
                    this.adjectives.push(w);
                    break;
            }
        }
    }

    addWords(words) {
        words.forEach(word => this.addWord(word));
    }

    getWords() {
        return this;
    }

    getSpecialCharacters(num = 1) {
        return this.specialCharacters[Math.floor(Math.random() * this.specialCharacters.length)];
    }

    getRandomNumber(num = 1) {
        let result = '';
        for (let i = 0; i < num; i++) {
            result += Math.floor(Math.random() * 10);
        }
        return result;
    }

    getRandomWords(num = 1, type = WordType.NONE) {
        switch (type) {
            case WordType.NOUN:
                return this.nouns[Math.floor(Math.random() * this.nouns.length)];
            case WordType.VERB:
                return this.verbs[Math.floor(Math.random() * this.verbs.length)];
            case WordType.ADVERB:
                return this.adverbs[Math.floor(Math.random() * this.adverbs.length)];
            case WordType.ADJECTIVE:
                return this.adjectives[Math.floor(Math.random() * this.adjectives.length)];
            default:
                const allWords = [...this.nouns, ...this.verbs, ...this.adverbs, ...this.adjectives];
                const randomWords = [];
                for (let i = 0; i < num; i++) {
                    const randomIndex = Math.floor(Math.random() * allWords.length);
                    randomWords.push(allWords.splice(randomIndex, 1)[0]);
                }
                return randomWords;
        }
    }
}

module.exports = Library;