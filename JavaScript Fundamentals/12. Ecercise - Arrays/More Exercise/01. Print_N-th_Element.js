function printNthElement (array){
    let step = Number(array.pop());
    let newArr = [];
    for (let index = 0; index < array.length; index+= step) {
        newArr += array[index] + " ";
    }
    console.log(newArr);
}

printNthElement (['5', '20', '31', '4', '20', '2'])