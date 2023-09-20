function vowlesSum (input){
    let word = input[0];
    let sum = 0;

    for (let i = 0 ; i < word.length ; i++){
        let char = word[i];

        if (char == 'a'){
            sum += 1;
        }
        else if (char == 'e'){
            sum += 2;
        }
        else if (char == 'i'){
            sum += 3;
        }
        else if (char == 'o'){
            sum += 4;
        }
        else if (char == 'u'){
            sum += 5;
        }

        sum + sum;
       
    }
    console.log (sum)
}

vowlesSum (["hi"])