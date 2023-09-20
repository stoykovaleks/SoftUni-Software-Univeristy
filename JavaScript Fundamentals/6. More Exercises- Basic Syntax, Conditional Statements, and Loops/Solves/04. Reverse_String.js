function reverseString (input){
    let inputAsArray = input.split("");
    let reversed = inputAsArray.reverse();
    console.log(reversed.join(""));
}

reverseString("Hello")