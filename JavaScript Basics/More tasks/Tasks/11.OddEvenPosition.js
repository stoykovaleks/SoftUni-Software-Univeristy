function oddEvenPos (input){

    let counts = Number (input[0]);

    let oddMin = Math.max;
    let even

    for (let index = 1; index <= counts; index++) {
        
        let current = Number(input[index]);


        let oddSum = 0;

        if (current % 2 !== 0){
            current++;
            oddSum = current;
        }
    }
    console.log(oddSum)
}
}

oddEvenPos(["6", "2", "3", "5", "4", "2", "1"])