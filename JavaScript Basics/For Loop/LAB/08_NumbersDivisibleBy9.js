function numberDivisibleByNine (input){
    let firstNum = Number (input[0]);
    let secondNum = Number (input[1]);

    let sumOfNumbers = 0;

    let nums = "";
    for (let i = firstNum; i <= secondNum; i++ ){
        if (i % 9 == 0){

            sumOfNumbers += i;
            nums += i + "\n"; 
        }
    }
    console.log (`The sum: ${sumOfNumbers}`);
    console.log (nums)
}

numberDivisibleByNine (["100", "200"]);