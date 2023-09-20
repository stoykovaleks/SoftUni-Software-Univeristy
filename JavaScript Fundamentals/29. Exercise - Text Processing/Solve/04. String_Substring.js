function stringSubstring(word, text){
    text = text.toLowerCase().split(" ");

    for (const words of text) {
        if(words === word){
            console.log(word);
            break;
        }
        else{
            console.log(`${word} not found!`);
            break;
        }
    }
}   

stringSubstring('python', 'JavaScript is the best programming language')