function addAndSubtract(first, second, third){

    function sum(first, second){
        return first + second;
    }
    
    let resultSum = sum(first, second);

    function subtract(sum, third){
        return sum - third;
    }

    return subtract(resultSum - third);
}

console.log(addAndSubtract(1,2,3));