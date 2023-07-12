function matchPhoneNum(input) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let text = input.shift();
    
    let result = text.match(pattern);

    console.log(result.join(", "));

}

matchPhoneNum(['+359 2 222 2222, +359/2/222/2222, +359-2 222 2222 +359-2-222-2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222'])