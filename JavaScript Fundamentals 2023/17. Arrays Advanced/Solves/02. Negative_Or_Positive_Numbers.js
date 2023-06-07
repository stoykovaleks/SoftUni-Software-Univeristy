function negaticeOrPositiveNumbers (array){
    let output = [];

    for (let index = 0; index < array.length; index++) {

        if (array[index] < 0){
            output.unshift(array[index]);
        }
        else{
            output.push(array[index]);
        }
    }
    console.log(output.join("\n"));
}

negaticeOrPositiveNumbers (['7', '-2', '8', '9'])