function fishTank(input)
{
    let length = Number (input[0]);
    let width = Number (input[1]);
    let hight = Number (input[2]);
    let percentage = Number (input[3])/100;

    let tankArea = (length * width * hight) / 1000;
    let neededLiters = tankArea * (1 - percentage);
    
    console.log(neededLiters);
}

fishTank(["85 ","75 ","47 ","17 "]);