const WordType = {
    NONE: 'NONE',
    NOUN: 'NOUN',
    VERB: 'VERB',
    ADVERB: 'ADVERB',
    ADJECTIVE: 'ADJECTIVE'
};

class Word {
    constructor(word, type = WordType.NONE) {
        this.word = word;
        this.type = type;
    }
}

class Noun extends Word {
    constructor(word) {
        super(word, WordType.NOUN);
    }
}

class Verb extends Word {
    constructor(word) {
        super(word, WordType.VERB);
    }
}

class Adverb extends Word {
    constructor(word) {
        super(word, WordType.ADVERB);
    }
}

class Adjective extends Word {
    constructor(word) {
        super(word, WordType.ADJECTIVE);
    }
}

class Library {
    constructor() {
        this.nouns = [];
        this.verbs = [];
        this.adverbs = [];
        this.adjectives = [];
    }

    addWord(word) {
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

    addWords(words) {
        words.forEach(word => this.addWord(word));
    }

    getWords() {
        return this;
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


module.exports = {
    WordType,
    Library,
    Word,
    Noun,
    Verb,
    Adverb,
    Adjective
};
