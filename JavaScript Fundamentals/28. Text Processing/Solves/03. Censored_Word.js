function censoredWord(text, word){
    let output = text;
    
    while(output.includes(word)){
        output = output.replace(word, "*".repeat(word.length));
    }
    console.log(output);
}

censoredWord('A small sentence with some words', 'small')
console.log("--------");
censoredWord('Find the hidden word', 'hidden')