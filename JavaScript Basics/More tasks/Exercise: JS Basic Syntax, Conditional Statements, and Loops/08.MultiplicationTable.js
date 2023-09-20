function multiplicationTable (parameter){

    for (let row = 1; row <= 10; row++) {
        
        let result = parameter*row;
        
        console.log(`${parameter} X ${row} = ${result}`);
    }
}
multiplicationTable(5)