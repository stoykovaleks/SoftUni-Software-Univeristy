function depositCalculator(input){
    let depositSum = Number (input[0]);
    let depositTerm = Number (input[1]);
    let earlyPercentage = Number (input[2]);

    let interest = depositSum*(earlyPercentage/100);
    let round = interest.toFixed(2);
    let interestPerMonth = round / 12;
    let roundtwo = interestPerMonth.toFixed(2);
    let totalSum = depositSum + depositTerm * interestPerMonth;
    let totalSumRound = totalSum.toFixed(2);

    console.log(totalSumRound);
}

depositCalculator([" 200 ", " 3 ", " 5.7 "])