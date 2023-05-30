function rotateArray (array){
    let rotations = Number (array.pop());
    let rotatedArray = [];

    for (let index = 0; index < array.length; index++) {
        let newIndex = (index + rotations) % array.length;
        rotatedArray[newIndex] = array[index];
    }
    console.log(rotatedArray.join(" "));
}

rotateArray (  ['1', '2', '3', '4', '2'])