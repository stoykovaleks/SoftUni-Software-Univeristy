function wordsTracker(input) {
    let wordMap = new Map();

    let targetWords = input.shift().split(" ");

    targetWords.forEach(element => {
        wordMap.set(element, 0);
    });

    for (let line of input) {
        for (let word of targetWords) {

            if (line === word) {
                let count = wordMap.get(line);
                wordMap.set(line, count + 1);
            }
        }
    }
    let sortedAsArray = Array.from(wordMap.entries()).sort((a, b) => b[1]-a[1]);

    for (const iterator of sortedAsArray) {
        console.log(`${iterator.join(" - ")}`);
    }
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])