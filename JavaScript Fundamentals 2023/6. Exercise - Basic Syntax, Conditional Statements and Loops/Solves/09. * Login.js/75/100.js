function login(input) {
    let index = 0;
    let username = input[index];
    index++;

    let wrongPassCounter = 0;
    let password = username.split('').reverse().join('');

    while (currentPassword !== password) {
        let currentPassword = input[index];
        index++;

        if (wrongPassCounter > 3) {
            console.log(`User ${username} blocked!`);
            break;
        }
        if (currentPassword !== password) {
            wrongPassCounter++;
            console.log("Incorrect password. Try again.");
        }
        else {
            console.log(`User ${username} logged in.`);
            return;
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA'])