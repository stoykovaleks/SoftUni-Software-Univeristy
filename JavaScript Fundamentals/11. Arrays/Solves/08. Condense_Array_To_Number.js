function condenseArrayToNumber(array) {
    while (array.length > 1) {
        let condensed = [];
        for (let i = 0; i < array.length - 1; i++) {
            condensed.push(array[i] + array[i + 1]);
        }
        array = condensed;
        // if (array.length === 1) {
        //     console.log("1 is already condensed to number");
            
        // }
        
    }
    console.log(array[0])
}

condenseArrayToNumber([2, 10, 3])