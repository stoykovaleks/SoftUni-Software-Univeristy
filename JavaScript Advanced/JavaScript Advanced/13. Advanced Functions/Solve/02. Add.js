function solution(initialNumber) {

    return function (addNumber) {
        let result = initialNumber;
        result += addNumber;
        return result;
    };
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
