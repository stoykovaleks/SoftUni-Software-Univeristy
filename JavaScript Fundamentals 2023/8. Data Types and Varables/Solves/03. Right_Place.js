function rightPlace (str1, chr, str2){
    let repl = str1.replace('_', chr);
    let result;

    if (repl === str2){
        result = "Matched";
    }
    else {
        result = "Not Matched";
    }
    console.log(result);
}

rightPlace ('Str_ng', 'i', 'String')