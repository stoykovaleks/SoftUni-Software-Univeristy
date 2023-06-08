function smallestTwoNumbers(array) {

    array.sort(function(a, b) {
        return a - b;
    });
    
    let output = array.slice(0, 2);

    console.log(output.join(" "));
}

smallestTwoNumbers([30, 15, 50, 5])