function sumOfTwoNumbers(input) {

    let start = Number(input[0])
    let end = Number(input[1]);
    let magicNum = Number(input[2]);

    let combination = 0;

    for (let i = start; i <= end; i++) {

        for (let j = start; j <= end; j++) {
            
            combination++;
            if (i+j == magicNum){
                console.log(`Combination N:${combination} (${i} + ${j} = ${magicNum})`);
                return;
            }
        }
    }
    console.log(`${combination} combinations - neither equals ${magicNum}`);
}

sumOfTwoNumbers(["1", "10", "5"])
