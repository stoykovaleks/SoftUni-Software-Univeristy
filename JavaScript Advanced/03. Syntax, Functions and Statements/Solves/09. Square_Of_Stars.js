function squareOfStars(input){

    for (let i = 0; i < input; i++) {
        let stars = '* '.repeat(input);
        console.log(`${stars}`);
    }
    
}

squareOfStars(3)