function decryptingCommand(input) {
    let message = input.shift();

    for (const line of input) {
        if (line === "Finish") {
            break;
        }

        let [command, ...arguments] = line.split(" ");

        switch (command) {
            case "Replace":
                let currentChr = arguments[0];
                let newChr = arguments[1];
                let regex = new RegExp(currentChr, "g");
                message = message.replace(regex, newChr);
                console.log(message);
                break;

            case "Cut":
                let startIndex = Number(arguments[0]);
                let endIndex = Number(arguments[1]);

                if (isValidIndex(startIndex, message) && isValidIndex(endIndex, message) && startIndex <= endIndex) {
                    message = message.slice(0, startIndex) + message.slice(endIndex + 1);
                    console.log(message);
                }
                else {
                    console.log("Invalid indices!");
                }
                break;

            case "Make":
                let currentCommand = arguments[0];

                if (currentCommand == 'Lower') {
                    message = message.toLowerCase();
                    console.log(message);
                }
                else {
                    message = message.toUpperCase();
                    console.log(message);
                }
                break;

            case "Check":
                let str = arguments[0];

                if (message.includes(str)) {
                    console.log(`Message contains ${str}`);
                }
                else {
                    console.log(`Message doesn't contain ${str}`);
                }
                break;

            case "Sum":
                let startIndx = Number(arguments[0])
                let endIndx = Number(arguments[1]);
                let asciiSum = sumAsciiValues(message, startIndx, endIndx);

                console.log(asciiSum);
                break;

        }
    }
    function isValidIndex(index, message) {
        return index >= 0 && index < message.length;
    }

    function sumAsciiValues(str, startIndex, endIndex) {
        if (isValidIndex(startIndex, str) && isValidIndex(endIndex, str)) {
            let substring = str.substring(startIndex, endIndex + 1);
            let sum = 0;
            for (const char of substring) {
                sum += char.charCodeAt(0);
            }
            return sum;
        } else {
            return "Invalid indices!";
        }
    }
}
// decryptingCommand((["ILikeSoftUni",
//     "Replace I We",
//     "Make Upper",
//     "Check SoftUni",
//     "Sum 1 4",
//     "Cut 1 4",
//     "Finish"]))
console.log("---------");
decryptingCommand((["HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"]))