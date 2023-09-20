function oddOccurrences(input) {
    let words = input.toLowerCase().split(" ");
    let wordsCount = {};

    for (const word of words) {
        wordsCount[word] = (wordsCount[word] || 0) + 1;
    }
    let odd = [];
    let objEntries = Object.entries(wordsCount)

    for (let [word, count] of objEntries) {
        if (count % 2 !== 0) {
            odd.push(word);
        }
    }
    console.log(odd.join(" "));

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
console.log("-----------------");
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')