function login(input) {
    let index = 0;
    let correctPassword = input[index];
    index++;

    let reversed = correctPassword.split('').reverse().join('');
    let wrongPasswordCounter = 0;

    while (wrongPasswordCounter <= 4) {
        let currentInput = input[index];
        index++;

        if (currentInput === reversed) {
            console.log(`User ${correctPassword} logged in.`);
            return;
        }
        else {
            console.log("Incorrect password. Try again.");
            wrongPasswordCounter++;
        }
        if (wrongPasswordCounter === 3){
            continue;
        }
    }
    console.log(`User ${correctPassword} blocked!`);
}

login(['momo','omom'])