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


module.exports = {
    WordType,
    Word,
    Noun,
    Verb,
    Adverb,
    Adjective
};
