function matchDates(input) {
    let text = input.shift();
    let pattern = /\b(?<day>)(\d{2})([\/.])(?<month>)[A-Z][a-z]{2}\2(?<year>)(\d{4})/g;

    let matches = text.matchAll(pattern);

    for (const match of matches) {
        console.log(`Day: ${match[1]}, Month: ${match[3]}, Year: ${match[4]}`);
    }

}

matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014'])