function wordOccurrences(input) {
    let wordCounts = {};

    for (const word of input) {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    }

    let sortedWords = Object.entries(wordCounts).sort(([wordA, countA], [wordB, countB]) => countB - countA);

    for (const [word, count] of sortedWords) {
        console.log(`${word} -> ${count} times`);
    }
}

wordOccurrences([
    "Here",
    "is",
    "the",
    "first",
    "sentence",
    "Here",
    "is",
    "another",
    "sentence",
    "And",
    "finally",
    "the",
    "third",
    "sentence"])