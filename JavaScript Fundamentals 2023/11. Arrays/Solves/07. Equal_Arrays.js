function equalArrays (arrayA, arrayB){
    let sum = 0;

    for (let i = 0; i < arrayA.length; i++) {
        arrayA[i] = Number (arrayA[i]);
    }
    for (let j = 0; j < arrayB.length; j++) {
        arrayB[j] = Number (arrayB[j]);
    }
     
    for (let index = 0; index < arrayA.length; index++) {
        if (arrayA[index] !== arrayB[index]) {
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            return;
        }
        else{
            sum += arrayA[index];
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}

equalArrays ( ['10','20','30'],
['10','20','30'])