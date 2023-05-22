function oscarCeremony(input) {
    let hallRent = Number(input[0]);

    let statuettePrice = hallRent * 0.7;
    let catteringPrice = statuettePrice * 0.85;
    let soundPrice = catteringPrice / 2;
    let totalSum = hallRent + statuettePrice + catteringPrice + soundPrice;
    console.log(totalSum.toFixed(2));
}

oscarCeremony(["5555"]);