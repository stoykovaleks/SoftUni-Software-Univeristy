function sumPrimeNonPrime(input) {
    let index = 0;

    let command = input[index];
    index++;

    let primeSum = 0;
    let nonPrimeSum = 0;

    while (command !== "stop") {
        let current = Number(command);

        let isPrime = true;

        if (current < 0) {
            console.log("Number is negative.");
            break;
        }
        if (current <= 1) {
            nonPrimeSum += current;
        }

        for (let i = 2; i < current; i++) {
            if (current % i === 0) {
                isPrime = false;
                nonPrimeSum += current;
                break;
            }
        }

        if (isPrime == true) {
            primeSum += current;
        }

        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"])


//prime : 3,7,19 = 29
//non : 9,0,4 =