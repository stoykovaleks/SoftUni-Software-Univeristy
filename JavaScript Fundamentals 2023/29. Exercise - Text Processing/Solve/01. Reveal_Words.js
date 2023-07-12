function revealWords(words, text){
    let wordAsArr = words.split(", ");

    for (const word of wordAsArr) {
        let wordLength = word.length;
        let placeholder = '*'.repeat(wordLength);
     
        text = text.replace(placeholder, word);
    }
    console.log(text);
}

revealWords('great', 'softuni is ***** place for learning new programming languages')