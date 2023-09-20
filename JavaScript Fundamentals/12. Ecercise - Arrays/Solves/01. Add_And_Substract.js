function addAndSubstract (array){
    let sumOldArray = 0;
    let sumNewArray = 0;
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let currentNum = Number(array[i]);
        
        sumOldArray += currentNum;

        if (currentNum % 2 ==0){
            currentNum += i;
        }
        else{
            currentNum -= i;  
        }
        array[i] = currentNum;
        sumNewArray += currentNum;
    }
    console.log(array);
    console.log(sumOldArray);
    console.log(sumNewArray);
}

addAndSubstract ([5, 15, 23, 56, 35]) 