function modernTimes(text){
    let textAsArr = text.split(" ");

    for (const word of textAsArr) {
        
        if(word[0] === "#" && word.length > 1){
            let specialWords = word.split("");
            specialWords.shift("#");

            let output = "";
            for (const chr of specialWords) {
                if(!isNaN(chr)){
                    break;
                }
                else{
                     output += chr;
                }
            }
            console.log(output);
        }
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')