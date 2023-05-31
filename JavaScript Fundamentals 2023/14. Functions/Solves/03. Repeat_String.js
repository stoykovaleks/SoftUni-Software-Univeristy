function repeatString (string, repeats){
    let output = '';
    for (let i = 0; i < repeats; i++) {
        output += string;
    }
    console.log(output);
}


repeatString ('abc', 3)