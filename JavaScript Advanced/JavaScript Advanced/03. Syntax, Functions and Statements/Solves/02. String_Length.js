function stringLength(first, second, third) {

    let lengthFirst = first.length;
    let lengthSecond = second.length;
    let lengthThird = third.length;

    let sumLength = lengthFirst + lengthSecond + lengthThird;
    let avgLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(avgLength);
}

stringLength('chocolate', 'ice cream', 'cake')