function mergeArrays (arrayA, arrayB){
    let arrayC = [];

    for (let index = 0; index < arrayA.length; index++) {
        if (index % 2 == 0){
            arrayC[index] = Number(arrayA[index]) + Number(arrayB[index]);
        }
        else{
            arrayC[index] = arrayA[index] + arrayB[index];
        }
        
    }
    console.log(arrayC.join(" - "));
}

mergeArrays ( 
['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])