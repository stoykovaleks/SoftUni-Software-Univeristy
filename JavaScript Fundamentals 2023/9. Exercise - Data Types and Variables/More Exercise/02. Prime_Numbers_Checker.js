function isPrime(number) {
    if (number <= 1) {
        console.log('false');
        return;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log('false');
            return;
        }
    }

    console.log('true');
}
isPrime(7)  
