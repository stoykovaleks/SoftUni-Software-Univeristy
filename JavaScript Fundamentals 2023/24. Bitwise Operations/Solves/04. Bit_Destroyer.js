function bitDestroyer(num, pos){
    let mask = ~(1 << pos);
    let result = num & mask;
    console.log(result);
}

bitDestroyer(1313, 5)