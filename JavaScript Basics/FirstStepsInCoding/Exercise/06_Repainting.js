function repainting(input){
    let nylon = Number (input[0]);
    let paint = Number (input[1]);
    let diluent = Number (input[2]);
    let hours = Number (input[3]);

    let nylonSum = (nylon + 2)* 1.50;
    let paintSum = (paint * 1.1) * 14.50;
    let diluentSum = diluent * 5;
    let totalMaterialsSum = nylonSum + paintSum + diluentSum + 0.40;
    let sumWorkers = (totalMaterialsSum * 0.3) * hours;
    let totalSum = totalMaterialsSum + sumWorkers;

    console.log(totalSum);
}

repainting(["10 ","11 ","4 ","8 "])