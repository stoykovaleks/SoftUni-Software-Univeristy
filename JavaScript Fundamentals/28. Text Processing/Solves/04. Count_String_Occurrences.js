function countStringOccurrences(text, word){
    let textAsArray = text.split(" ");
    let wordCount = 0;

    for (const words of textAsArray) {
        if(words === word){
            wordCount++;
        }
    }
    console.log(wordCount);
}
countStringOccurrences('This is a word and it also is a sentence', 'is')