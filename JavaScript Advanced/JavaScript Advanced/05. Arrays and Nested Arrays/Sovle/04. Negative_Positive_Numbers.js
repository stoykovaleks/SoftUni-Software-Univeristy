function negativePositiveNums(array){
    let result = [];

    for (const data of array) {
        if(data < 0){
            result.unshift(data);
        }
        else{
            result.push(data);
        }
    }  
    for (const output of result) {
        console.log(output);
    }
}

negativePositiveNums([7, -2, 8, 9])