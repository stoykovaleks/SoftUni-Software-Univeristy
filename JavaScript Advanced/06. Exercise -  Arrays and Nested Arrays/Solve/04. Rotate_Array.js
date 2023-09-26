function rotateArray(array, rotations) {
    
    let rotated = [];

    for (let i = 0; i < array.length; i++) {
      let last = (i + rotations) % array.length;
      rotated[last] = array[i];
    }
  
    console.log(rotated.join(' '));
}
rotateArray(['1',
    '2',
    '3',
    '4'],
    2
)