function binaryDigitsCount(num, digit){
    let count = 0;

    while(num > 0){
        let rem = num % 2;

        if(rem == digit){
            count++;
        }
        num = Math.trunc(num / 2);
    }
    console.log(count);
}

binaryDigitsCount(20, 0)