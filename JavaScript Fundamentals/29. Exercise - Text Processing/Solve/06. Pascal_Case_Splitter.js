function pascalCaseSplitter(word){
    let output = [];
    let wordLength = word.length;
    let index = 0;

    for (let i = 1; i < wordLength; i++) {

        if(word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90){
            output.push(word.substring(index, i));
            index = i;
        }
    }
    output.push(word.substring(index, wordLength));
    console.log(output.join(", "));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')