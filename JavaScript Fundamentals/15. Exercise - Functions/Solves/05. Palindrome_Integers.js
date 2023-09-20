function palindromeIntegers(array) {

    for (let index = 0; index < array.length; index++) {
        let numbers = array[index];
        let reversed = parseInt(numbers.toString().split('').reverse().join(''));

        if (numbers === reversed){
            console.log("true");
        }
        else {
            console.log("false");
        }
    }
}

console.log(palindromeIntegers([123, 323, 421, 121]));