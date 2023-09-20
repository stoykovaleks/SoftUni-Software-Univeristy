function commonElements (firstArray, secondArray){
    for (let i = 0; i < firstArray.length; i++) {
        if (secondArray.includes(firstArray[i])) {
            console.log(firstArray[i]);
        }
    }
}

commonElements (
['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])