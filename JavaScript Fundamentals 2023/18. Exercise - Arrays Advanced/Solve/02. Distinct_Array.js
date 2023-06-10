function distinctArray(array){
    let result = [... new Set(array)];

    console.log(result.join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])