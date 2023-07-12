function RepeatRepeatingChars(input) {
    let output = input[0];
    let inputLength = input.length;

    for (let index = 1; index < inputLength; index++) {
        let current = input[index];
        let previous = input[index - 1];

        if (current !== previous) {
            output += current;
        }
    }
    console.log(output);
}

RepeatRepeatingChars('aaaaabbbbbcdddeeeedssaa')