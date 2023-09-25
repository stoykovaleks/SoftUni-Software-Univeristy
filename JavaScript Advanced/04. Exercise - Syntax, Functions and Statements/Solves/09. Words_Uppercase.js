function wordsUppercase(input){
    let words = input.split(/\W+/);

    let uppered = words
    .filter(word => word !== '')
    .map(word => word.toUpperCase());
    console.log(uppered.join(", "));
}

wordsUppercase('Hi, how are you?')