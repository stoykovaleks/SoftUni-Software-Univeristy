let signCheck = (numOne, numTwo, numThree) => {
    let negativesCount = [numOne, numTwo, numThree].filter((num) => num < 0).length;

    if (negativesCount % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
};

signCheck(5, 12, -15); 