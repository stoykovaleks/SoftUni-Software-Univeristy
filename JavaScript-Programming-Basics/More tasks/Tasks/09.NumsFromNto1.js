function numsFromMtoN(n) {

    let sum = 0;
    for (let index = 1; index <= n+n; index++) {

        
        if (index % 2 !== 0) {
            sum += index
            console.log (index);
        }
    }
    console.log(`Sum: ${sum}`);
}

numsFromMtoN(5)