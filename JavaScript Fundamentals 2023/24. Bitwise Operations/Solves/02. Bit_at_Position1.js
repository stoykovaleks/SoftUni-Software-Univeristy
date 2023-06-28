function bitAtPosition(num){
    let mask = 1 << 1;
    let bit = num & mask;
    let result = bit >> 1;
    console.log(result);
}

bitAtPosition(13)