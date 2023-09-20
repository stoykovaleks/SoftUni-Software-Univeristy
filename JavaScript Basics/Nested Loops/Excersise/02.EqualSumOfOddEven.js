function equalSumOddOrEven(input) {

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let result = "";

    for (let currNum = firstNum; currNum <= secondNum; currNum++) {
        let even = 0;
        let odd = 0;
        
        let currNumAsString = currNum.toString();

        for (let index = 0; index < currNumAsString.length; index++) {
            let currDigit = Number(currNumAsString[index]);

            let position = index + 1;
            if (position % 2 == 0) {
                even += currDigit;
            }
            else {
                odd += currDigit;
            }
        }
        if(odd == even){
            result += currNumAsString + " ";
           // console.log(result);
        }
    }
    console.log(result)
}

equalSumOddOrEven(["100000", "100050"]);