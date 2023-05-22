function operationsBetweenNumbers (input){
    let N1 = Number (input[0]);
    let N2 = Number (input[1]);
    let op = input[2];
    
    let result = 0;
    let numIs = "";         
                            
    switch (op){
        case "+":  
        result = N1 + N2      
            if (result % 2 == 0){
                numIs = "even"
            }
            else{
                numIs = "odd"
            }
            console.log (`${N1} + ${N2} = ${result} - ${numIs}`)
            break;

        case "-":
            result = N1 - N2
            if (result % 2 == 0){
                numIs = "even"                                               
            }           
            else{
                numIs = "odd"
            }
            console.log (`${N1} - ${N2} = ${result} - ${numIs}`)
            break;

        case "*":
            result = N1 * N2
            if (result % 2 == 0){
                numIs = "even"
            }
            else{
                numIs = "odd"
            }
            console.log (`${N1} * ${N2} = ${result} - ${numIs}`)
            break;

        case "/":
            result = N1 / N2
            if (N2 == 0){
                console.log (`Cannot divide ${N1} by zero`)
            }
            else{
                console.log (`${N1} / ${N2} = ${(result).toFixed(2)}`)
            }
            break;

        case "%":
            result = N1 % N2
            if (N2 == 0){
                console.log (`Cannot divide ${N1} by zero`)
            }
            else{
                console.log (`${N1} % ${N2} = ${result}`)
            }
            break;
    }
}

operationsBetweenNumbers (["10","12","+"])
