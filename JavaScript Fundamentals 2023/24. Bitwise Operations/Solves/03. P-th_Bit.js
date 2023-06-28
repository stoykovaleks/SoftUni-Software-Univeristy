function PthBit(num, pos){
    let mask = 1 << pos;
    let result = num & mask;
    let lsb = result >> pos;
    console.log(lsb);
}

PthBit(2134, 5)