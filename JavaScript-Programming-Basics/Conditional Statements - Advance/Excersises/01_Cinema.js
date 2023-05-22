function cinema (input){
    let projectType = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let ticketsPrice = 0;

    if (projectType == "Premiere"){
        ticketsPrice = columns * rows * 12;
    }
    else if (projectType == "Normal"){
        ticketsPrice = columns * rows * 7.50;
    }
    else if (projectType == "Discount"){
        ticketsPrice = columns * rows * 5;
    }
    console.log (`${ticketsPrice.toFixed(2)} leva.`);

}

cinema (["Normal","21","13"])
