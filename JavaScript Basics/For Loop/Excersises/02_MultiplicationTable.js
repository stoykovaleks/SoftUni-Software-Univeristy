function multiplicationTable (input){
    let n = Number (input[0]);

    for (let index = 1; index <= 10; index++) {
        
        console.log (`${index} * ${n} = ${index * n}`);
    }
}

multiplicationTable (["5"])